var grunt = require('grunt');

grunt.initConfig({
  nodewebkit: {
    options: {
      platforms: ['win32'], // tambien adminte win64, linux32, linux64, osx32 y osx64
      buildDir: './webkitbuilds',
    },
    src: [
      './src/**/*',
    ]
  },
});


grunt.loadNpmTasks('grunt-node-webkit-builder');
