module.exports = function (grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Minify JavaScript files
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        files: {
          "dist/js/main.min.js": ["src/js/main.js"],
          "dist/js/training.min.js": ["src/js/training.js"],
        },
      },
    },

    // Minify CSS files
    cssmin: {
      target: {
        files: {
          "dist/css/styles.min.css": ["src/css/styles.css"],
        },
      },
    },

    // Copy static assets
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "src/",
            src: ["index.html"],
            dest: "dist/",
          },
          {
            expand: true,
            cwd: "assets/",
            src: ["**"],
            dest: "dist/assets/",
          },
        ],
      },
    },

    // Watch for changes
    watch: {
      scripts: {
        files: ["src/js/**/*.js"],
        tasks: ["uglify"],
        options: {
          spawn: false,
        },
      },
      styles: {
        files: ["src/css/**/*.css"],
        tasks: ["cssmin"],
        options: {
          spawn: false,
        },
      },
      html: {
        files: ["src/*.html"],
        tasks: ["copy"],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s)
  grunt.registerTask("default", ["uglify", "cssmin", "copy"]);
  grunt.registerTask("dev", ["default", "watch"]);
};

// grunt dev (run and watch changes)
