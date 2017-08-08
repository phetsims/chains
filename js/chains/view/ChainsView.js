// Copyright 2015, University of Colorado Boulder

/**
 * View for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Bounds2 = require( 'DOT/Bounds2' );
  var chains = require( 'CHAINS/chains' );
  var RichText = require( 'SCENERY/nodes/RichText' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LayoutBox = require( 'SCENERY/nodes/LayoutBox' );
  var MultiLineText = require( 'SCENERY_PHET/MultiLineText' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );

  // strings
  var plainStringString = require( 'string!CHAINS/plainString' );
  var multilineStringString = require( 'string!CHAINS/multilineString' );
  var htmlStringString = require( 'string!CHAINS/htmlString' );
  var patternStringString = require( 'string!CHAINS/patternString' );
  var sizeString = require( 'string!CHAINS/size' );
  var unitsNmString = require( 'string!SCENERY_PHET/units_nm' );

  // constants
  var FONT = new PhetFont( 36 );

  /**
   * @param {ChainsModel} model
   * @constructor
   */
  function ChainsView( model ) {

    ScreenView.call( this, { layoutBounds: new Bounds2( 0, 0, 1024, 618 ) } );

    this.addChild( new LayoutBox( {
      align: 'left',
      spacing: 25,
      children: [
        new Text( plainStringString, { font: FONT, fill: 'green' } ),
        new MultiLineText( multilineStringString, { font: FONT, align: 'left' } ),
        new RichText( htmlStringString, { font: FONT } ),
        new Text( StringUtils.format( patternStringString, sizeString, 8, unitsNmString ), { font: FONT } )
      ],
      center: this.layoutBounds.center
    } ) );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  chains.register( 'ChainsView', ChainsView );

  return inherit( ScreenView, ChainsView );
} );