import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'

gulp.task('default', () => {
    const b = browserify({entries: 'src/index.js', debug: false})
    b.transform('babelify', {presets: ['latest', 'stage-2']})

    return b.bundle()
    .pipe(source('index.js')) //will convert text streams from browserify.bundle() to vinyl streams (gulp)
    .pipe(buffer()) //will convert streaming vinyl files to use buffer, some plugins need buffered vinyl objects
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
})
