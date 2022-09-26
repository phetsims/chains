// Copyright 2021-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import chains from './chains.js';

type StringsType = {
  'chains': {
    'title': string;
    'titleStringProperty': LinkableProperty<string>;
  };
  'plainString': string;
  'plainStringStringProperty': LinkableProperty<string>;
  'multilineString': string;
  'multilineStringStringProperty': LinkableProperty<string>;
  'htmlString': string;
  'htmlStringStringProperty': LinkableProperty<string>;
  'patternString': string;
  'patternStringStringProperty': LinkableProperty<string>;
  'namedPlaceholdersString': string;
  'namedPlaceholdersStringStringProperty': LinkableProperty<string>;
  'size': string;
  'sizeStringProperty': LinkableProperty<string>;
};

const ChainsStrings = getStringModule( 'CHAINS' ) as StringsType;

chains.register( 'ChainsStrings', ChainsStrings );

export default ChainsStrings;
