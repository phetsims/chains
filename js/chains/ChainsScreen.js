// Copyright 2015-2017, University of Colorado Boulder

/**
 * The 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const chains = require( 'CHAINS/chains' );
  const ChainsView = require( 'CHAINS/chains/view/ChainsView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Screen = require( 'JOIST/Screen' );

  /**
   * @constructor
   */
  function ChainsScreen( tandem ) {

    Screen.call( this,
      function() { return {}; },
      function( model ) { return new ChainsView( model, tandem.createTandem( 'view' ) ); },
      { tandem: tandem }
    );
  }

  chains.register( 'ChainsScreen', ChainsScreen );

  return inherit( Screen, ChainsScreen );
} );