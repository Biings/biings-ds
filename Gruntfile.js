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
                    'xmlns:xlink' : "http://www.w3.org/1999/xlink",
                    'viewBox': '0 0 24 24'
                },
                cleanup: ['fill','stroke'],
                cleanupdefs: true,
                inheritviewbox: true,
                preserveDescElement: false,
                includeTitleElement: false
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
                // Some versions of grunt-svgmin expect the 'plugins' at the top-level,
                // others under 'svgoOptions'. If the first form errors, try moving this
                // object under `svgoOptions: { plugins: [ ... ] }`.
                plugins: [
                // Start from the default set, then override specific rules
                {
                    name: 'preset-default',
                    params: {
                    overrides: {
                        removeViewBox: false,            // keep viewBox
                        cleanupIDs: false,               // don't munge IDs
                        removeUselessStrokeAndFill: false
                    }
                    }
                },
                // Extra passes equivalent to your previous config
                'removeDesc',
                'removeTitle',
                'removeComments',
                'removeMetadata',
                'removeEditorsNSData',
                'removeEmptyAttrs',
                'removeUnusedNS',
                'removeEmptyText'
                ]
            },
            dist: {
                files: {
                'build/bds-icons.min.svg': 'build/bds-icons.svg',
                'docs/media/bds-icons.min.svg': 'build/bds-icons.svg'
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