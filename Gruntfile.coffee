#global module:false

module.exports = (grunt) ->
  fnShowProps = (obj, objName) ->
    result = ""
    for i of obj # обращение к свойствам объекта по индексу
      result += objName + "." + i + " = " + obj[i] + "\n"
    grunt.log.writeln result
  grunt.initConfig
    sass:
      compile:
        files:
          "./css/style.css": ["./sass/style.scss"]
      dev:
        options: # Target options
          style: "expanded"
          trace: true
        files:
          "css/style.css": "sass/style.sass"

    coffee:
      compile:
        files:
          "js/script.js": ["js/**/*.coffee"]

    connect:
      server:
        options:
          base: "./"
          keepalive: true
          port: 4000
          hostname: '*'

    watch:
      jade:
        files: [ "app/**/*" ],
        tasks: ["jade:debug"]
      sass:
        files: [ "./**/*.sass", "./**/*.scss" ],
        options:
          nospawn: true
          sourcemap: true
          lineNumbers: true
        tasks: ["sass:dev"]


    jade:
      debug:
        files:
          'page/': ['app/*.jade']
        options:
          compileDebug: false
          client: false
          runtime: true

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks 'grunt-jade'


  # Default task.
  grunt.registerTask "default", ["watch"]
  grunt.registerTask "jadew", ["watch:jade"]
  grunt.registerTask "sassw", ["watch:sass"]
  grunt.registerTask "run", ["connect:server"] # не выпиливай очень нужная веш
