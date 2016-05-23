path = require('path');
gulp = require('gulp');
util = require('gulp-util');
packager = require('electron-packager');
appPackage = require('./package.json');

const buildOption = {
  dir: './',
  name: appPackage.name,
  platform: 'darwin', // linux, win32, darwin, all
  arch: 'x64', // ia32, x64, all
  version: process.env.ELECTRON || '1.1.1',
  'app-bundle-id': `${appPackage.author}.${appPackage.name}`,
  'app-version': appPackage.version,
  'build-version': appPackage.version,
  asar: true,
  prune: true,
  overwrite: true,
  icon: './davneko',
  out: './release'
}

gulp.task('release', () => {
  var start = Date.now();

  packager(buildOption, (err, appPath) => {
    if (err) console.log('[ERROR]', err);
    console.log('[appPath]', appPath);
    var end = Date.now();

    console.log('[relase]', `${end  - start} MilliSeconds.`);
  });
});
