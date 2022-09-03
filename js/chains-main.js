// Copyright 2015-2022, University of Colorado Boulder

/**
 * Main entry point for the 'Chains' application.
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ChainsScreen from './chains/ChainsScreen.js';
import chainsStrings from './chainsStrings.js';

const chainsTitleStringProperty = chainsStrings.chains.titleStringProperty;

const simOptions = {
  credits: {
    softwareDevelopment: 'PhET Interactive Simulations'
  }
};

simLauncher.launch( () => {
  new Sim( chainsTitleStringProperty, [ new ChainsScreen( Tandem.ROOT.createTandem( 'chainsScreen' ) ) ], simOptions ).start();
} );