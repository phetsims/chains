// Copyright 2021-2025, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import chains from './chains.js';

type StringsType = {
  'chains': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'plainStringStringProperty': LocalizedStringProperty;
  'multilineStringStringProperty': LocalizedStringProperty;
  'htmlStringStringProperty': LocalizedStringProperty;
  'patternStringStringProperty': LocalizedStringProperty;
  'namedPlaceholdersStringStringProperty': LocalizedStringProperty;
  'sizeStringProperty': LocalizedStringProperty;
  'nestedLevel1': {
    'nestedLevel2': {
      'messageStringProperty': LocalizedStringProperty;
    }
  };
  'a11y': {
    'nested': {
      'constantStringProperty': LocalizedStringProperty;
      'fluentReferenceStringProperty': LocalizedStringProperty;
      'fluentVariableStringProperty': LocalizedStringProperty;
      'selectorStringProperty': LocalizedStringProperty;
      'cascadeStringProperty': LocalizedStringProperty;
    }
  }
};

const ChainsStrings = getStringModule( 'CHAINS' ) as StringsType;

chains.register( 'ChainsStrings', ChainsStrings );

export default ChainsStrings;
