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

// This map is used to create the fluent file and link to all StringProperties.
// Accessing StringProperties is also critical for including them in the built sim.
const fluentKeyToStringPropertyMap = new Map( [
  ['chains_title', ChainsStrings.chains.titleStringProperty],
  ['plainString', ChainsStrings.plainStringStringProperty],
  ['multilineString', ChainsStrings.multilineStringStringProperty],
  ['htmlString', ChainsStrings.htmlStringStringProperty],
  ['size', ChainsStrings.sizeStringProperty],
  ['a11y_nested_constant', ChainsStrings.a11y.nested.constantStringProperty],
  ['a11y_nested_fluentReference', ChainsStrings.a11y.nested.fluentReferenceStringProperty],
  ['a11y_nested_fluentVariable', ChainsStrings.a11y.nested.fluentVariableStringProperty],
  ['a11y_nested_selector', ChainsStrings.a11y.nested.selectorStringProperty],
  ['a11y_nested_cascade', ChainsStrings.a11y.nested.cascadeStringProperty]
] );

// A function that creates contents for a new Fluent file, which will be needed if any string changes.
const createFluentFile = (): string => {
  let ftl = '';
  for (const [key, stringProperty] of fluentKeyToStringPropertyMap.entries()) {
    ftl += `${key} = ${stringProperty.value}\n`;
  }
  return ftl;
};

const fluentSupport = new FluentContainer( createFluentFile, Array.from(fluentKeyToStringPropertyMap.values()) );

const ChainsFluent = {
  chains: {
    titleStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'chains_title' )
  },
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
