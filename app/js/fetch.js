console.log('fetch.js=ok');

getInfoProfileGit();

function getInfoProfileGit(){
    var url = "https://api.github.com/users/NovoseletskiyVadim";
		
    fetch(url)
        .then(function(response) {
            console.log('1st promise ', response); // 200
            if (response.status == 200)
                return response.json();
        })
        .then(function(response) {
            console.log('2nd promise ',response);
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