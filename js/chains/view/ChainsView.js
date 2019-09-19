// Copyright 2015-2017, University of Colorado Boulder

/**
 * View for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Bounds2 = require( 'DOT/Bounds2' );
  const chains = require( 'CHAINS/chains' );
  const inherit = require( 'PHET_CORE/inherit' );
  const LayoutBox = require( 'SCENERY/nodes/LayoutBox' );
  const MultiLineText = require( 'SCENERY_PHET/MultiLineText' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const RichText = require( 'SCENERY/nodes/RichText' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  const Text = require( 'SCENERY/nodes/Text' );

  // strings
  const htmlStringString = require( 'string!CHAINS/htmlString' );
  const multilineStringString = require( 'string!CHAINS/multilineString' );
  const namedPlaceholdersStringString = require( 'string!CHAINS/namedPlaceholdersString' );
  const patternStringString = require( 'string!CHAINS/patternString' );
  const plainStringString = require( 'string!CHAINS/plainString' );
  const sizeString = require( 'string!CHAINS/size' );
  const unitsNmString = require( 'string!SCENERY_PHET/units_nm' );

  // constants
  const FONT = new PhetFont( 36 );

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
    const resetAllButton = new ResetAllButton( {
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  chains.register( 'ChainsView', ChainsView );

  return inherit( ScreenView, ChainsView );
} );