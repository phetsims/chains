// Copyright 2015, University of Colorado Boulder

/**
 * Model for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var chains = require( 'CHAINS/chains' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * @constructor
   */
  function ChainsModel() {
    PropertySet.call( this, {} );
  }

  chains.register( 'ChainsModel', ChainsModel );

  return inherit( PropertySet, ChainsModel );
} );

