// Copyright 2025, University of Colorado Boulder
// AUTOMATICALLY GENERATED – DO NOT EDIT.
// Generated from chains-strings_en.yaml

/* eslint-disable */
/* @formatter:off */

import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import FluentPattern from '../../chipper/js/browser/FluentPattern.js';
import FluentContainer from '../../chipper/js/browser/FluentContainer.js';
import FluentConstant from '../../chipper/js/browser/FluentConstant.js';
import IntentionalAny from '../../phet-core/js/types/IntentionalAny.js';
import chains from './chains.js';
import ChainsStrings from './ChainsStrings.js';

const getFTL = (): string => {
  const ftl = `
chains_title = ${ChainsStrings.chains.titleStringProperty.value}
plainString = ${ChainsStrings.plainStringStringProperty.value}
multilineString = ${ChainsStrings.multilineStringStringProperty.value}
htmlString = ${ChainsStrings.htmlStringStringProperty.value}
size = ${ChainsStrings.sizeStringProperty.value}
a11y_nested_constant = ${ChainsStrings.a11y.nested.constantStringProperty.value}
a11y_nested_fluentReference = ${ChainsStrings.a11y.nested.fluentReferenceStringProperty.value}
a11y_nested_fluentVariable = ${ChainsStrings.a11y.nested.fluentVariableStringProperty.value}
a11y_nested_selector = ${ChainsStrings.a11y.nested.selectorStringProperty.value}
a11y_nested_cascade = ${ChainsStrings.a11y.nested.cascadeStringProperty.value}
`;
  return ftl;
};

const allStringProperties = [
  ChainsStrings.chains.titleStringProperty,
ChainsStrings.plainStringStringProperty,
ChainsStrings.multilineStringStringProperty,
ChainsStrings.htmlStringStringProperty,
ChainsStrings.patternStringStringProperty,
ChainsStrings.namedPlaceholdersStringStringProperty,
ChainsStrings.sizeStringProperty,
ChainsStrings.a11y.nested.constantStringProperty,
ChainsStrings.a11y.nested.fluentReferenceStringProperty,
ChainsStrings.a11y.nested.fluentVariableStringProperty,
ChainsStrings.a11y.nested.selectorStringProperty,
ChainsStrings.a11y.nested.cascadeStringProperty
];

const fluentSupport = new FluentContainer( getFTL, allStringProperties );

const ChainsFluent = {
  "chains.titleStringProperty": new FluentConstant( fluentSupport.bundleProperty, 'chains_title' ),
  plainStringStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'plainString' ),
  multilineStringStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'multilineString' ),
  htmlStringStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'htmlString' ),
  patternStringStringProperty: ChainsStrings.patternStringStringProperty,
  namedPlaceholdersStringStringProperty: ChainsStrings.namedPlaceholdersStringStringProperty,
  sizeStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'size' ),
  a11y: {
    nested: {
      constantStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_nested_constant' ),
      fluentReferenceStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_nested_fluentReference' ),
      fluentVariable: new FluentPattern<{ variable: IntentionalAny }>( fluentSupport.bundleProperty, 'a11y_nested_fluentVariable' ),
      selector: new FluentPattern<{ activityLevel: 'calm' | 'active' | 'activeAndPaused' | TReadOnlyProperty<'calm' | 'active' | 'activeAndPaused'> }>( fluentSupport.bundleProperty, 'a11y_nested_selector' ),
      cascade: new FluentPattern<{ activityLevel: 'calm' | 'active' | 'activeAndPaused' | TReadOnlyProperty<'calm' | 'active' | 'activeAndPaused'> }>( fluentSupport.bundleProperty, 'a11y_nested_cascade' )
    }
  }
};

export default ChainsFluent;

chains.register('ChainsFluent', ChainsFluent);
