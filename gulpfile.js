import browserSync from "browser-sync";
import gulp from "gulp";
import { deleteAsync } from "del";
import pug from "gulp-pug";
import * as coreSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import uglify from "gulp-uglify-es";
import imagemin from "gulp-imagemin";
import cache from "gulp-cache";
import gcmq from "gulp-group-css-media-queries";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(coreSass);
const server = browserSync.create();

export const browserSyncFunc = (done) => {
    server.init({
        server: {
            baseDir: "docs"
        },
        open: true,
        browser: "chrome"
    });
    done();
}

export const html = () => {
    return gulp.src("src/pug/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("docs"))
        .pipe(server.stream());
}

export const css = () => {
    return gulp.src(["src/sass/*.css", "src/sass/*.sass", "src/sass/*.scss"])
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ["last 15 versions"], cascade: true }))
        .pipe(gcmq())
        .pipe(concat("style.css"))
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest("docs/css"))
        .pipe(server.stream());
}

export const js = () => {
    return gulp.src("src/js/**/*.js")
        .pipe(uglify.default())
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest("docs/js"))
        .on('end', server.reload);
}

export const files = () => {
    return gulp.src("src/*.*", { dot: true })
        .pipe(gulp.dest("docs"))
        .pipe(server.stream());
}

export const fonts = () => {
    return gulp.src("src/fonts/**/*.*", { encoding: false })
        .pipe(gulp.dest("docs/fonts"))
        .pipe(server.stream());
}

export const images = () => {
    return gulp.src("src/img/**/*", { encoding: false })
        .pipe(gulp.dest("docs/img"))
        .pipe(server.stream());
}

export const delDocs = () => {
    return deleteAsync(["docs"]);
}

export const watch = () => {
    gulp.watch("src/sass/**/*.{sass,scss,css}", css);
    gulp.watch("src/js/**/*.js", js);
    gulp.watch("src/pug/**/*.pug", html);
    gulp.watch("src/*.*", files);
    gulp.watch("src/fonts/**/*.*", fonts);
    gulp.watch("src/img/**/*.*", images);
}

const build = gulp.series(
    delDocs, 
    gulp.parallel(html, css, js, files, fonts, images)
);

const dev = gulp.series(
    build,
    gulp.parallel(browserSyncFunc, watch)
);

export default dev;