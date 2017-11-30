// Copyright 2015-2017, University of Colorado Boulder

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
  var inherit = require( 'PHET_CORE/inherit' );
  var LayoutBox = require( 'SCENERY/nodes/LayoutBox' );
  var MultiLineText = require( 'SCENERY_PHET/MultiLineText' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var RichText = require( 'SCENERY/nodes/RichText' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );

  // strings
  var htmlStringString = require( 'string!CHAINS/htmlString' );
  var multilineStringString = require( 'string!CHAINS/multilineString' );
  var namedPlaceholdersStringString = require( 'string!CHAINS/namedPlaceholdersString' );
  var patternStringString = require( 'string!CHAINS/patternString' );
  var plainStringString = require( 'string!CHAINS/plainString' );
  var sizeString = require( 'string!CHAINS/size' );
  var unitsNmString = require( 'string!SCENERY_PHET/units_nm' );

  // constants
  var FONT = new PhetFont( 36 );

  /**
   * @param {ChainsModel} model
   * @param {Tandem} tandem
   * @constructor
   */
  function ChainsView( model, tandem ) {

    ScreenView.call( this, { layoutBounds: new Bounds2( 0, 0, 1024, 618 ), tandem: tandem } );

    this.addChild( new LayoutBox( {
      align: 'left',
      spacing: 25,
      children: [
        new Text( plainStringString, {
          font: FONT,
          fill: 'green',
          tandem: tandem.createTandem( 'plainString' )
        } ),
        new MultiLineText( multilineStringString, {
          font: FONT,
          align: 'left',
          tandem: tandem.createTandem( 'multiLineString' )
        } ),
        new RichText( htmlStringString, {
          font: FONT,
          tandem: tandem.createTandem( 'htmlString' )
        } ),
        new Text( StringUtils.format( patternStringString, sizeString, 8, unitsNmString ), {
          font: FONT,
          tandem: tandem.createTandem( 'patternString' )
        } ),
        new Text( StringUtils.fillIn( namedPlaceholdersStringString, { name: 'Alice', speed: '100' } ), {
          font: FONT,
          fill: '#990000',
          tandem: tandem.createTandem( 'namedPlaceholdersString' )
        } )
      ],
      center: this.layoutBounds.center
    } ) );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  chains.register( 'ChainsView', ChainsView );

  return inherit( ScreenView, ChainsView );
} );