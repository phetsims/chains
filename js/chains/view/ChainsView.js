// Copyright 2015-2022, University of Colorado Boulder

/**
 * View for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import SceneryPhetStrings from '../../../../scenery-phet/js/SceneryPhetStrings.js';
import { RichText, Text, VBox } from '../../../../scenery/js/imports.js';
import chains from '../../chains.js';
import ChainsStrings from '../../ChainsStrings.js';

const htmlStringString = ChainsStrings.htmlString;
const multilineStringString = ChainsStrings.multilineString;
const namedPlaceholdersStringString = ChainsStrings.namedPlaceholdersString;
const patternStringString = ChainsStrings.patternString;
const plainStringString = ChainsStrings.plainString;
const sizeString = ChainsStrings.size;
const unitsNmString = SceneryPhetStrings.units_nm;

// constants
const FONT = new PhetFont( 36 );

class ChainsView extends ScreenView {

  /**
   * @param {*} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {

    super( {
      tandem: tandem
    } );

    this.addChild( new VBox( {
      align: 'left',
      spacing: 25,
      children: [
        new Text( plainStringString, {
          font: FONT,
          fill: 'green',
          tandem: tandem.createTandem( 'plainString' )
        } ),
        new RichText( multilineStringString, {
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
}

chains.register( 'ChainsView', ChainsView );
export default ChainsView;