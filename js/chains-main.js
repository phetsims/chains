// Copyright 2015-2017, University of Colorado Boulder

/**
 * Main entry point for the 'Chains' application.
 */
define( function( require ) {
  'use strict';

  // modules
  var ChainsScreen = require( 'CHAINS/chains/ChainsScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var chainsTitleString = require( 'string!CHAINS/chains.title' );

  var simOptions = {
    credits: {
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)'
    }
  };

  SimLauncher.launch( function() {
    new Sim( chainsTitleString, [ new ChainsScreen() ], simOptions ).start();
  } );
} );