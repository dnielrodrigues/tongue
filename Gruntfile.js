module.exports = function(grunt) {
	
  grunt.initConfig({

  	//AÇÕES
    uglify: {
    	'build/js/scripts.js' : ['src/js/drLib.js','src/js/drHexagramModule.js','src/js/decksModule.js','src/js/drApp.js']
    },

    // concat: {
    //   dist: {
    //       src: ['src/js/drLib.js','src/js/drHexagramModule.js','src/js/decksModule.js','src/js/drApp.js'],
    //       dest: "build/js/scripts.js"
    //   }
    // },

    sass : {
    	'build/css/estilo.css' : 'src/css/main.scss'
    },

    cssmin : {
      'build/css/estilo.css' : 'build/css/estilo.css'
    },

    htmlmin: { 
      dist: {          
        options: {                                
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.php' : 'src/index.php',
          'build/header.php' : 'src/header.php',
          'build/footer.php' : 'src/footer.php',
          'build/read-decks.php' : 'src/read-decks.php',
          'build/edit-deck.php' : 'src/edit-deck.php',
          'build/delete.php' : 'src/delete.php',
          'build/edit-card.php' : 'src/edit-card.php',
          'build/end-game.php' : 'src/end-game.php',
          'build/game-history.php' : 'src/game-history.php',
          'build/game.php' : 'src/game.php',
          'build/pause-game.php' : 'src/pause-game.php',
          'build/edit-read-cards.php' : 'src/edit-read-cards.php',
          'build/read-decks.php' : 'src/read-decks.php',
          'build/read-profile.php' : 'src/read-profile.php',
          'build/select-level.php' : 'src/select-level.php',
          'build/trash.php' : 'src/trash.php',
          'build/Lib.php' : 'src/Lib.php',
        }
      }
    },

    watch : {
      dist : {
        files : [
          'src/*',
          'src/**/*',
          'src/js/**/*',
          'src/css/**/*'
        ],
        tasks : [ 'uglify' , 'sass' , 'htmlmin' , 'cssmin' ]
      }
    }
    //fim - ACOES

  });
 
  // Plugins
  //grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas
  grunt.registerTask( 'default', [ 'concat' , 'uglify' , 'sass' , 'htmlmin' , 'cssmin' ] );
  grunt.registerTask( 'w', [ 'watch' ] );

};