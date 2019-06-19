/**
 * Copyright 2013-2015 Fosys Interactive, SA
 * –––––––––––––––––––––––––––––––––––––––––
 *
 * SVG ICON BUILDER
 */

module.exports = function(grunt) {

    // tell Grunt we plan to use those plugins
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svgmin');

    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        svgstore: {
            options: {
                svg: { // will be added as attributes to the resulting SVG
                    'version' : "1.1",
                    'xmlns' : "http://www.w3.org/2000/svg",
                    'xmlns:xlink' : "http://www.w3.org/1999/xlink"
                },
                cleanup: ['fill','stroke'],
                preserveDescElement: false
            },
            default : {
                files: {
                    'build/bds-icons.svg': [
                        'src/icons/*.svg'
                    ]
                },
            }
        },

        svgmin: {
            options: {
                plugins: [
                    { cleanupIDs: false },
                    { removeDesc: true },
                    { removeTitle: true },
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false },
                    { removeEmptyAttrs: true },
                    { removeComments: true },
                    { removeMetadata: true },
                    { removeEditorsNSData: true },
                    { removeEmptyAttrs: true },
                    { removeUnusedNS: true },
                    { removeEmptyText: true }
                ]
            },
            dist: {
                files: {
                    'build/bds-icons.min.svg': 'build/bds-icons.svg',
                    'docs/media/bds-icons.min.svg': 'build/bds-icons.svg',
                }
            }
        }

    });


    // Creates the sprite by default when hitting 'grunt'
    grunt.registerTask('default', [
        'svgstore',
        'svgmin'
    ]);
};