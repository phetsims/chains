// Copyright 2021-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import chains from './chains.js';

type StringsType = {
  'chains': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  };
  'plainString': string;
  'plainStringProperty': TReadOnlyProperty<string>;
  'multilineString': string;
  'multilineStringProperty': TReadOnlyProperty<string>;
  'htmlString': string;
  'htmlStringProperty': TReadOnlyProperty<string>;
  'patternString': string;
  'patternStringProperty': TReadOnlyProperty<string>;
  'namedPlaceholdersString': string;
  'namedPlaceholdersStringProperty': TReadOnlyProperty<string>;
  'size': string;
  'sizeProperty': TReadOnlyProperty<string>;
};

const chainsStrings = getStringModule( 'CHAINS' ) as StringsType;

chains.register( 'chainsStrings', chainsStrings );

export default chainsStrings;
