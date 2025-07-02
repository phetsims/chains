// Copyright 2025, University of Colorado Boulder
// AUTOMATICALLY GENERATED – DO NOT EDIT.
// Generated from chains-strings_en.yaml

/* eslint-disable */
/* @formatter:off */

import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import type { FluentVariable } from '../../chipper/js/browser/FluentPattern.js';
import FluentPattern from '../../chipper/js/browser/FluentPattern.js';
import FluentContainer from '../../chipper/js/browser/FluentContainer.js';
import FluentConstant from '../../chipper/js/browser/FluentConstant.js';
import FluentComment from '../../chipper/js/browser/FluentComment.js';
import chains from './chains.js';
import ChainsStrings from './ChainsStrings.js';

// This map is used to create the fluent file and link to all StringProperties.
// Accessing StringProperties is also critical for including them in the built sim.
// However, if strings are unused in Fluent system too, they will be fully excluded from
// the build. So we need to only add actually used strings.
const fluentKeyToStringPropertyMap = new Map();

const addToMapIfDefined = ( key: string, path: string ) => {
  const sp = _.get( ChainsStrings, path );
  if ( sp ) {
    fluentKeyToStringPropertyMap.set( key, sp );
  }
};

addToMapIfDefined( 'chains_title', 'chains.titleStringProperty' );
addToMapIfDefined( 'plainString', 'plainStringStringProperty' );
addToMapIfDefined( 'multilineString', 'multilineStringStringProperty' );
addToMapIfDefined( 'htmlString', 'htmlStringStringProperty' );
addToMapIfDefined( 'size', 'sizeStringProperty' );
addToMapIfDefined( 'nestedLevel1_nestedLevel2_message', 'nestedLevel1.nestedLevel2.messageStringProperty' );
addToMapIfDefined( 'a11y_nested_constant', 'a11y.nested.constantStringProperty' );
addToMapIfDefined( 'a11y_nested_fluentReference', 'a11y.nested.fluentReferenceStringProperty' );
addToMapIfDefined( 'a11y_nested_fluentVariable', 'a11y.nested.fluentVariableStringProperty' );
addToMapIfDefined( 'a11y_nested_selector', 'a11y.nested.selectorStringProperty' );
addToMapIfDefined( 'a11y_nested_cascade', 'a11y.nested.cascadeStringProperty' );

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
    titleStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'chains_title', _.get( ChainsStrings, 'chains.titleStringProperty' ) )
  },
  plainStringStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'plainString', _.get( ChainsStrings, 'plainStringStringProperty' ) ),
  multilineStringStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'multilineString', _.get( ChainsStrings, 'multilineStringStringProperty' ) ),
  htmlStringStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'htmlString', _.get( ChainsStrings, 'htmlStringStringProperty' ) ),
  patternStringStringProperty: _.get( ChainsStrings, 'patternStringStringProperty' ),
  namedPlaceholdersStringStringProperty: _.get( ChainsStrings, 'namedPlaceholdersStringStringProperty' ),
  sizeStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'size', _.get( ChainsStrings, 'sizeStringProperty' ) ),
  nestedLevel1: {
    nestedLevel2: {
      messageStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'nestedLevel1_nestedLevel2_message', _.get( ChainsStrings, 'nestedLevel1.nestedLevel2.messageStringProperty' ) )
    }
  },
  a11y: {
    nested: {
      constantStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_nested_constant', _.get( ChainsStrings, 'a11y.nested.constantStringProperty' ) ),
      fluentReferenceStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_nested_fluentReference', _.get( ChainsStrings, 'a11y.nested.fluentReferenceStringProperty' ) ),
      fluentVariable: new FluentPattern<{ variable: FluentVariable }>( fluentSupport.bundleProperty, 'a11y_nested_fluentVariable', _.get( ChainsStrings, 'a11y.nested.fluentVariableStringProperty' ), [{"name":"variable"}] ),
      selector: new FluentPattern<{ activityLevel: 'calm' | 'active' | 'activeAndPaused' | TReadOnlyProperty<'calm' | 'active' | 'activeAndPaused'> }>( fluentSupport.bundleProperty, 'a11y_nested_selector', _.get( ChainsStrings, 'a11y.nested.selectorStringProperty' ), [{"name":"activityLevel","variants":["calm","active","activeAndPaused"]}] ),
      cascade: new FluentPattern<{ activityLevel: 'calm' | 'active' | 'activeAndPaused' | TReadOnlyProperty<'calm' | 'active' | 'activeAndPaused'> }>( fluentSupport.bundleProperty, 'a11y_nested_cascade', _.get( ChainsStrings, 'a11y.nested.cascadeStringProperty' ), [{"name":"activityLevel","variants":["calm","active","activeAndPaused"]}] )
    }
  }
};

export default ChainsFluent;

chains.register('ChainsFluent', ChainsFluent);
