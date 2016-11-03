// Copyright 2015, University of Colorado Boulder

/**
 * The 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var chains = require( 'CHAINS/chains' );
  var ChainsView = require( 'CHAINS/chains/view/ChainsView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  /**
   * @constructor
   */
  function ChainsScreen() {

    Screen.call( this,
      function() { return {}; },
      function( model ) { return new ChainsView( model ); },
      { backgroundColor: 'white' }
    );
  }

  chains.register( 'ChainsScreen', ChainsScreen );

  return inherit( Screen, ChainsScreen );
} );