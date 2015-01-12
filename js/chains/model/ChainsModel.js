// Copyright 2002-2015, University of Colorado Boulder

/**
 * Model for the 'Chains' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * @constructor
   */
  function ChainsModel() {
    PropertySet.call( this, {} );
  }

  return inherit( PropertySet, ChainsModel );
} );