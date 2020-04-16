// Copyright 2015-2020, University of Colorado Boulder

/**
 * Main entry point for the 'Chains' application.
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ChainsScreen from './chains/ChainsScreen.js';
import chainsStrings from './chainsStrings.js';

const chainsTitleString = chainsStrings.chains.title;

const simOptions = {
  credits: {
    softwareDevelopment: 'PhET Interactive Simulations'
  }
};

SimLauncher.launch( function() {
  new Sim( chainsTitleString, [ new ChainsScreen( Tandem.ROOT.createTandem( 'chainsScreen' ) ) ], simOptions ).start();
} );