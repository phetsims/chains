// Copyright 2015-2025, University of Colorado Boulder

/**
 * View for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import Range from '../../../../dot/js/Range.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import MathSymbols from '../../../../scenery-phet/js/MathSymbols.js';
import NumberControl from '../../../../scenery-phet/js/NumberControl.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import RichText from '../../../../scenery/js/nodes/RichText.js';
import chains from '../../chains.js';
import ChainsStrings from '../../ChainsStrings.js';

// constants
const FONT = new PhetFont( 26 );

class DirectionalView extends ScreenView {

  /**
   * @param {*} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {

    super( {
      tandem: tandem
    } );

    const textOptions = {
      font: FONT,
      maxWidth: 600
    };

    const numberProperty = new NumberProperty( -1 );

    const sign = number => number < 0 ? MathSymbols.MINUS : MathSymbols.PLUS;

    // The following are the possible patterns considered for testing LTR translations
    const filledPatternStringProperties = [

      // Simple value pattern (-2 or 2)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.valuePatternStringProperty ], ( number, pattern ) =>
        '\u2067' + StringUtils.fillIn( pattern, { value: number } ) + '\u2069' ),

      // Sign value pattern (-2 or +2)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.valueSignPatternStringProperty ], ( number, pattern ) =>
        StringUtils.fillIn( pattern, { value: Math.abs( number ), sign: sign( number ) } ) ),

      // Value with units pattern (-2 m or 2 m)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.valueUnitsPatternStringProperty, ChainsStrings.directional.unitsStringProperty ], ( number, pattern, units ) =>
        StringUtils.fillIn( pattern, { value: number, units: units } ) ),

      // Value with units pattern (-2 m or 2 m)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.valueUnitsPatternStringProperty, ChainsStrings.directional.celciusStringProperty ], ( number, pattern, celcius ) =>
        StringUtils.fillIn( pattern, { value: number, units: celcius } ) ),

      // Sign value with units pattern (-2 m or +2 m)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.valueSignUnitsPatternStringProperty, ChainsStrings.directional.unitsStringProperty ], ( number, pattern, units ) =>
        StringUtils.fillIn( pattern, { value: Math.abs( number ), sign: sign( number ), units: units } ) ),


      // Currency patterns (-2$ or +2$)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.signValueCurrencyPatternStringProperty, ChainsStrings.directional.currencyStringProperty ], ( number, pattern, currency ) =>
        StringUtils.fillIn( pattern, { value: Math.abs( number ), sign: sign( number ), currency: currency } ) ),

      // Currency patterns (-$2 or +$2)
      new DerivedProperty( [ numberProperty, ChainsStrings.directional.signCurrencyValuePatternStringProperty, ChainsStrings.directional.currencyStringProperty ], ( number, pattern, currency ) =>
        StringUtils.fillIn( pattern, { value: Math.abs( number ), sign: sign( number ), currency: currency } ) ),

      // Equation pattern ( word = -$2 )
      new DerivedProperty( [
        numberProperty,
        ChainsStrings.directional.wordEqualsSignCurrencyValuePatternStringProperty,
        ChainsStrings.directional.wordStringProperty,
        ChainsStrings.directional.currencyStringProperty
      ], ( number, pattern, word, currency ) =>
        StringUtils.fillIn( pattern, { value: Math.abs( number ), sign: sign( number ), word: word, currency: currency } ) )
    ];

    this.addChild( new VBox( {
      align: 'left',
      spacing: 25,
      children: [
        new NumberControl( 'value', numberProperty, new Range( -5, 5 ) ),
        ..._.map( filledPatternStringProperties, patternProperty => new RichText( patternProperty, textOptions ) )
      ],
      center: this.layoutBounds.center
    } ) );

    // Reset All button
    const resetAllButton = new ResetAllButton( {
      listener: () => {
        numberProperty.reset();
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }
}

chains.register( 'DirectionalView', DirectionalView );
export default DirectionalView;