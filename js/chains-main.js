// Copyright 2015-2019, University of Colorado Boulder

/**
 * Main entry point for the 'Chains' application.
 */
define( require => {
  'use strict';

  // modules
  const ChainsScreen = require( 'CHAINS/chains/ChainsScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const chainsTitleString = require( 'string!CHAINS/chains.title' );

  const tandem = Tandem.rootTandem;

  const simOptions = {
    credits: {
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)'
    }
  };

  SimLauncher.launch( function() {
    new Sim( chainsTitleString, [ new ChainsScreen( tandem.createTandem( 'chainsScreen' ) ) ], simOptions ).start();
  } );
} );