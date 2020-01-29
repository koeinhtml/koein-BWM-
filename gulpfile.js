var 
	gulp         = require('gulp'), // Подключаем Gulp
	sourcemaps   = require('gulp-sourcemaps'); // Подключаем Sourcemaps
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
	plumber      = require('gulp-plumber'); //Отслеживания ошибок
	fileinclude  = require('gulp-file-include');
	mainpath     = '';
	mainfolder   = 'codefam';

	


gulp.task('sass', function(){ // Создаем таск Sass для разработчика с соурсмап

	return gulp.src(mainpath + mainfolder +'/sass/**/*.*') // Берем источник
		.pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
		.pipe(sourcemaps.init({loadMaps: true})) //sourcemaps init
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //Стиль преобразования
		// .pipe(autoprefixer(["last 4 version"], { cascade: false })) // Создаем префиксы
		.pipe(autoprefixer(["IE 10", "IE 11"], { cascade: false })) // Создаем префиксы
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(mainpath + mainfolder +'/css')) // Выгружаем результата в папку ../'+ mainfolder +'/css
		// .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


gulp.task('fileincludetask', function() {
	 gulp.src(mainpath + mainfolder +'/html-dev/[^_]*.html')
	.pipe(fileinclude({
	  prefix: '@@',
	  basepath: '@file'
	}))
	.pipe(gulp.dest(mainpath + mainfolder +'/html')); 
});



gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: mainpath + mainfolder // Директория для сервера - app
		},
		open: false, // Не открывать браузер при запуске
		port: 8080, // Порт
		notify: false, // Отключаем уведомления
	});
});



gulp.task('watch', ['browser-sync'], function() {
	gulp.watch(mainpath + mainfolder +'/sass/*.*',  

	function() {
     gulp.start('sass');
  }); // Наблюдение за sass файлами в папке sass
  gulp.watch(mainpath + mainfolder +'/html-dev/**/*.html',
  	function() {
     gulp.start('fileincludetask');
  }); 
  gulp.watch(mainpath + mainfolder +'/css/*.css', browserSync.reload); 
	gulp.watch(mainpath + mainfolder +'/js/**/*.js', browserSync.reload)  // Наблюдение за JS файлами в папке js

});





gulp.task('default', ['watch'])
