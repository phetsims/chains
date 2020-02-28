// Copyright 2015-2020, University of Colorado Boulder

/**
 * The 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import chains from '../chains.js';
import ChainsView from './view/ChainsView.js';

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

inherit( Screen, ChainsScreen );
export default ChainsScreen;