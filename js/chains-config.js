// Copyright 2015-2017, University of Colorado Boulder

/*
 * RequireJS configuration file for the 'Chains' application.
 * Paths are relative to the location of this file.
 */
require.config( {

  deps: [ 'chains-main' ],

  paths: {

    // plugins
    image: '../../chipper/js/requirejs-plugins/image',
    mipmap: '../../chipper/js/requirejs-plugins/mipmap',
    string: '../../chipper/js/requirejs-plugins/string',
    ifphetio: '../../chipper/js/requirejs-plugins/ifphetio',

    text: '../../sherpa/lib/text-2.0.12',

    // PhET libs, uppercase names to identify them in require.js imports
    AXON: '../../axon/js',
    BRAND: '../../brand/' + phet.chipper.brand + '/js',
    DOT: '../../dot/js',
    JOIST: '../../joist/js',
    KITE: '../../kite/js',
    PHETCOMMON: '../../phetcommon/js',
    REPOSITORY: '..',
    PHET_CORE: '../../phet-core/js',
    PHET_IO: '../../phet-io/js',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SUN: '../../sun/js',
    TANDEM: '../../tandem/js',

    // sim code
    CHAINS: '.'
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: phet.chipper.getCacheBusterArgs()
} );
