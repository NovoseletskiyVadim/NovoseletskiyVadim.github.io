// console.log('fetch.js=ok');

getInfoProfileGit();
getInfoRepositoryGit();





function getInfoProfileGit(){
    var url = "https://api.github.com/users/NovoseletskiyVadim";
		
    fetch(url)
        .then(function(response) {
            // console.log('1st promise ', response); // 200
            if (response.status == 200){

                return response.json();
            }
                
                
        })
        .then(function(response) {
            // console.log('2nd promise ',response);
            var gifString = response.avatar_url;
            var name=response.name;
            var created=response.created_at;
            var publicRepos=response.public_repos;
            var direction=response.bio;

            var imageProfile = document.createElement('img');
            imageProfile.setAttribute('src', gifString);
            document.getElementById('foto').innerHTML = '';
            document.getElementById('foto').appendChild(imageProfile);


            var nameInfo=document.createElement('p');
            nameInfo.innerText="name :"+name;

            var createdInfo=document.createElement('p');
            createdInfo.innerText="create :"+created;

            var publicReposInfo=document.createElement('p');
            publicReposInfo.innerText="public repositories :"+publicRepos;

            var emailInfo=document.createElement('p');
            emailInfo.innerText="email : novoseletskiy.v@gmail.com"

            var directionInfo=document.createElement('p');
            directionInfo.innerText="direction : "+direction;

            document.getElementById('info').innerHTML='';
            document.getElementById('info').appendChild(nameInfo);
            document.getElementById('info').appendChild(createdInfo);
            document.getElementById('info').appendChild(publicReposInfo);
            document.getElementById('info').appendChild(emailInfo);
            document.getElementById('info').appendChild(directionInfo);

        })
        .catch( alert );
}

function getInfoRepositoryGit(){
    var url="https://api.github.com/users/NovoseletskiyVadim/repos";

    fetch(url)
        .then(function(response){
            // console.log("1 st promise",response);
            if(response.status==200){

                return response.json();
            }
            
        })
        .then(function(response){
            // console.log("2 promise", response);

            var h_2=document.createElement('h2');
            h_2.innerText="My List Repositories :";

            var ulRepoList=document.createElement('ul');

            document.getElementById('repositories').appendChild(h_2);

            for( let i=0;i<response.length;i++){

                var listElement=document.createElement('li');
                listElement.innerText=response[i].full_name;
                listElement.setAttribute('id','elem'+i);
                ulRepoList.appendChild(listElement);


            }

            document.getElementById('repositories').appendChild(ulRepoList);

            var divInfoLastComit=document.createElement('div');
            divInfoLastComit.setAttribute('id','divInfoLastComit');
            document.getElementById('repositories').appendChild(divInfoLastComit);



            for(let i=0;i<response.length;i++){

                document.getElementById('elem'+i).onclick=function(){
                    // console.log("click=ok");
                    document.getElementById('divInfoLastComit').innerHTML='';
                    var h_3=document.createElement('h3');
                    h_3.innerText='Last commit was :';
                    divInfoLastComit.appendChild(h_3);

                    var dateLastComit=document.createElement('p');
                    dateLastComit.innerText="date: "+response[i].updated_at;
                    divInfoLastComit.appendChild(dateLastComit);
                       
                };

                document.getElementById('elem'+i).onmouseover=function(){
                    let elemLi=document.getElementsByTagName('li')
                    for(let i=0;i<elemLi.length;i++){
                        elemLi[i].style.color='black';
                    }
                    this.style.color='red';

                    document.getElementById('divInfoLastComit').innerHTML='';
                    var h_3=document.createElement('h3');
                    h_3.innerText='Last commit was :';
                    divInfoLastComit.appendChild(h_3);

                    var dateLastComit=document.createElement('p');
                    dateLastComit.innerText="date: "+response[i].updated_at;
                    divInfoLastComit.appendChild(dateLastComit);

                }

            }



        })
        .catch(alert);
}