// Copyright 2002-2015, University of Colorado Boulder

/**
 * The 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ChainsModel = require( 'CHAINS/chains/model/ChainsModel' );
  var ChainsView = require( 'CHAINS/chains/view/ChainsView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenTitle = require( 'string!CHAINS/chains.name' );

  /**
   * @constructor
   */
  function ChainsScreen() {

    Screen.call( this,
      screenTitle,
      new Rectangle( 0, 0, 100, 100, { fill: 'white' } ),
      function() { return new ChainsModel(); },
      function( model ) { return new ChainsView( model ); },
      { backgroundColor: 'white' }
    );
  }

  return inherit( Screen, ChainsScreen );
} );