let {src, dest}=require('gulp'),
    gulp=require('gulp'),
    scss=require('gulp-sass');
    autoprefixer=require('gulp-autoprefixer');
    clean_css=require('gulp-clean-css');
    rename=require('gulp-rename');
    uglify=require('gulp-uglify-es').default;
    browsersync=require('browser-sync');
    del=require('del');
    fileinclude=require('gulp-file-include');
    babel = require('gulp-babel');

const source_folder = "src"
const project_folder = "dist"

const path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        assets: project_folder + "/assets/"
    },
    src:{
        html: [source_folder + "/*.html","!"+source_folder + "/_*.html" ],
        css: source_folder + "/scss/styles.scss",
        js:  source_folder + "/js/index.js",
        assets: source_folder + "/assets/"
    },
    watch:{
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js:  source_folder + "/js/**/*.js",
        // img:  source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        
    },
    clean: "./" + project_folder + "/"
}
function browserSync(){
    browsersync.init({
        server:{
            baseDir: "./"+ project_folder +"/"
        },
        port:3000,
        notify:false
    })
}
function html(){
    
    return src(path.src.html)
    .pipe(fileinclude())
    // делает вставку webp по тегу Img
    // .pipe(webphtml()) 
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}
function js(){
    
    return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({
        extname: ".min.js"
    }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}
function watchFiles(params){
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
}
function clean(params){
    // del(source_folder+'/sass/base/_autofonts.scss')
    return del(path.clean)
}
function css(){
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        // .pipe(group_media())
        .pipe(
            autoprefixer({
                // overrideBrowserslist: ["last 5 versions"], 
                cascade: true
            })
        )
        // .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}
let build=gulp.series(clean, gulp.parallel(js, css, html));
let watch=gulp.parallel(build, watchFiles, browserSync);

exports.js=js;
exports.scss=scss;
exports.html=html;
exports.build=build;
exports.watch=watch;
exports.default=watch;