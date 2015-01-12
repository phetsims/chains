// Copyright 2002-2015, University of Colorado Boulder

/**
 * View for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Bounds2 = require( 'DOT/Bounds2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Text = require( 'SCENERY/nodes/Text' );

  /**
   * @param {ChainsModel} model
   * @constructor
   */
  function ChainsView( model ) {

    ScreenView.call( this, { layoutBounds: new Bounds2( 0, 0, 1024, 618 ) } );

    //TODO
    this.addChild( new Text( 'plain text', {
      font: new PhetFont( 36 ),
      center: this.layoutBounds.center
    } ) );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() { model.reset(); },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  return inherit( ScreenView, ChainsView );
} );