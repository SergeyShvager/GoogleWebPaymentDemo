var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy: true });

var parallelize = require("concurrent-transform");

var AWS = require('aws-sdk');

gulp.task('help', plug.taskListing);
gulp.task('default', ['help']);

gulp.task('deploy', function () {
  var publisher = plug.awspublish.create({
    region: 'eu-west-1',
    params: {
      Bucket: 'app.cofeed.io'
    },
    credentials: new AWS.SharedIniFileCredentials({profile: 'cofeed'})
  });
  return gulp.src("./build/**")
    .pipe(parallelize(publisher.publish({ 'Cache-Control': 'max-age=315360000, no-transform, public' }), 20))
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe(plug.awspublish.reporter({
      states: ['create', 'update', 'delete']
    }));
});
