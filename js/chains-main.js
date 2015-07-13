// Copyright 2002-2015, University of Colorado Boulder

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
  var simTitleString = require( 'string!CHAINS/chains.name' );

  var screens = [ new ChainsScreen() ];

  var simOptions = {
    credits: {
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)'
    }
  };

  SimLauncher.launch( function() {
    new Sim( simTitleString, screens, simOptions ).start();
  } );
} );