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
  var HTMLText = require( 'SCENERY/nodes/HTMLText' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LayoutBox = require( 'SCENERY/nodes/LayoutBox' );
  var MultiLineText = require( 'SCENERY_PHET/MultiLineText' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );

  // strings
  var plainString = require( 'string!CHAINS/plainString' );
  var multilineString = require( 'string!CHAINS/multilineString' );
  var htmlString = require( 'string!CHAINS/htmlString' );
  var patternString = require( 'string!CHAINS/patternString' );
  var sizeString = require( 'string!CHAINS/size' );
  var nanometersString = require( 'string!SCENERY_PHET/units_nm' );

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
        new Text( plainString, { font: FONT, fill: 'green' } ),
        new MultiLineText( multilineString, { font: FONT, align: 'left' } ),
        new HTMLText( htmlString, { font: FONT } ),
        new Text( StringUtils.format( patternString, sizeString, 8, nanometersString ), { font: FONT } )
      ],
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