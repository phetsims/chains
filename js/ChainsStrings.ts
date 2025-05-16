// Copyright 2021-2025, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import {FluentBundle} from '../../chipper/js/browser-and-node/FluentLibrary.js';
import getStringModule from '../../chipper/js/browser/getStringModule.js';
import LocalizedString from '../../chipper/js/browser/LocalizedString.js';
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
  'a11y': {
    'nested': {
      'constantStringProperty': LocalizedStringProperty;
      'fluentReferenceStringProperty': LocalizedStringProperty;
      'fluentVariableStringProperty': LocalizedStringProperty;
      'selectorStringProperty': LocalizedStringProperty;
      'cascadeStringProperty': LocalizedStringProperty;
    }
  };
  'localizedStringMap': Record<string, LocalizedString>;
  'fluentBundleProperty': TReadOnlyProperty<FluentBundle>;
}

const ChainsStrings = getStringModule( 'CHAINS' ) as StringsType;

chains.register( 'ChainsStrings', ChainsStrings );

export default ChainsStrings;
