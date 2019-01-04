
var gulp = require('gulp'),
sass=require('gulp-sass'),
browserSync= require('browser-sync'); 

gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.scss') // Берем источник
    .pipe(sass()) 
    .pipe(gulp.dest('app/css')) 
    .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: '../NovoseletskiyVadim.github.io' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('code',function(){
    return gulp.src('*.html')
    .pipe(browserSync.reload({stream:true}))

});

gulp.task('js',function(){
    return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({stream:true}))

});


gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
    // gulp.watch('*.html', browserSync.reload); //это наблюдение за HTML не работает 
    gulp.watch('*.html',gulp.parallel('code'));//Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', gulp.parallel('js')); // Н
});

gulp.task('default', gulp.parallel('watch','browser-sync','sass'))


