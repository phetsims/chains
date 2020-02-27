// Copyright 2015-2019, University of Colorado Boulder

/**
 * Main entry point for the 'Chains' application.
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import chainsStrings from './chains-strings.js';
import ChainsScreen from './chains/ChainsScreen.js';

const chainsTitleString = chainsStrings.chains.title;

const tandem = Tandem.ROOT;

const simOptions = {
  credits: {
    softwareDevelopment: 'PhET Interactive Simulations'
  }
};

SimLauncher.launch( function() {
  new Sim( chainsTitleString, [ new ChainsScreen( tandem.createTandem( 'chainsScreen' ) ) ], simOptions ).start();
} );