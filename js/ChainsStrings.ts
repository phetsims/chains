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
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'plainString': string;
  'plainStringStringProperty': TReadOnlyProperty<string>;
  'multilineString': string;
  'multilineStringStringProperty': TReadOnlyProperty<string>;
  'htmlString': string;
  'htmlStringStringProperty': TReadOnlyProperty<string>;
  'patternString': string;
  'patternStringStringProperty': TReadOnlyProperty<string>;
  'namedPlaceholdersString': string;
  'namedPlaceholdersStringStringProperty': TReadOnlyProperty<string>;
  'size': string;
  'sizeStringProperty': TReadOnlyProperty<string>;
};

const ChainsStrings = getStringModule( 'CHAINS' ) as StringsType;

chains.register( 'ChainsStrings', ChainsStrings );

export default ChainsStrings;
