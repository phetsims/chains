/* eslint-disable */
// AUTOMATICALLY GENERATED – DO NOT EDIT.
// Generated 2025-05-16T00:03:19.772Z from chains-strings_en.yaml

import StringProperty from '../../axon/js/StringProperty.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import FluentUtils from '../../chipper/js/browser/FluentUtils.js';
import { FluentBundle, FluentResource } from '../../chipper/js/browser-and-node/FluentLibrary.js';
import IntentionalAny from '../../phet-core/js/types/IntentionalAny.js';
import chains from './chains.js';
import ChainsStrings from './ChainsStrings.js';
import { isTReadOnlyProperty } from '../../axon/js/TReadOnlyProperty.js';

const getFTL = () => {
  const ftl = `
chains.title = ${ChainsStrings.chains.titleStringProperty.value}

plainString = ${ChainsStrings.plainStringStringProperty.value}

multilineString = ${ChainsStrings.multilineStringStringProperty.value}

htmlString = ${ChainsStrings.htmlStringStringProperty.value}

patternString = ${ChainsStrings.patternStringStringProperty.value}

namedPlaceholdersString = ${ChainsStrings.namedPlaceholdersStringStringProperty.value}

size = ${ChainsStrings.sizeStringProperty.value}

a11y_nested_constant = ${ChainsStrings.a11y.nested.constantStringProperty.value}

a11y_nested_fluentReference = ${ChainsStrings.a11y.nested.fluentReferenceStringProperty.value}

a11y_nested_fluentVariable = ${ChainsStrings.a11y.nested.fluentVariableStringProperty.value}

a11y_nested_selector = ${ChainsStrings.a11y.nested.selectorStringProperty.value}

a11y_nested_cascade = ${ChainsStrings.a11y.nested.cascadeStringProperty.value}
`;
  return ftl;
};

const formatPattern = ( key: string, args: IntentionalAny ): string => {
  const bundle   = new FluentBundle( 'en' );
  const resource = new FluentResource( getFTL() );
  const errors   = bundle.addResource( resource );
  assert && assert( errors.length === 0, 'Errors when adding resource for locale en' );

  const newArgs = FluentUtils.handleFluentArgs( args );

  const message = bundle.getMessage( key );
  const result  = bundle.formatPattern( message!.value!, newArgs, errors );
  assert && assert( errors.length === 0, `Fluent errors found when formatting message: ${errors}` );
  return result;
};

const formatToProperty = ( key: string, args: IntentionalAny ): TReadOnlyProperty<string> => {
  const initialValue = formatPattern( key, args );
  const stringProperty = new StringProperty( initialValue );

  const update = () => {
    stringProperty.value = formatPattern( key, args );
  };

  // Whenever any arg changes update the string property
  Object.values( args ).forEach( arg => {
    if ( isTReadOnlyProperty( arg ) ) {
      arg.lazyLink( update )
    }
  } );

  // TODO: When the locale changes or when a string forming the FTL changes, also update the string property, see https://github.com/phetsims/chipper/issues/1588

  return stringProperty;
};

const ChainsFluent = {
  "chains.title": {
    format: ( args: IntentionalAny ): string => formatPattern( 'chains.title', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'chains.title', args )
  },
  plainString: {
    format: ( args: IntentionalAny ): string => formatPattern( 'plainString', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'plainString', args )
  },
  multilineString: {
    format: ( args: IntentionalAny ): string => formatPattern( 'multilineString', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'multilineString', args )
  },
  htmlString: {
    format: ( args: IntentionalAny ): string => formatPattern( 'htmlString', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'htmlString', args )
  },
  patternString: {
    format: ( args: IntentionalAny ): string => formatPattern( 'patternString', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'patternString', args )
  },
  namedPlaceholdersString: {
    format: ( args: IntentionalAny ): string => formatPattern( 'namedPlaceholdersString', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'namedPlaceholdersString', args )
  },
  size: {
    format: ( args: IntentionalAny ): string => formatPattern( 'size', args ),
    createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'size', args )
  },
  a11y: {
    nested: {
      constant: {
        format: ( args: IntentionalAny ): string => formatPattern( 'a11y_nested_constant', args ),
        createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'a11y_nested_constant', args )
      },
      fluentReference: {
        format: ( args: IntentionalAny ): string => formatPattern( 'a11y_nested_fluentReference', args ),
        createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'a11y_nested_fluentReference', args )
      },
      fluentVariable: {
        format: ( args: IntentionalAny ): string => formatPattern( 'a11y_nested_fluentVariable', args ),
        createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'a11y_nested_fluentVariable', args )
      },
      selector: {
        format: ( args: IntentionalAny ): string => formatPattern( 'a11y_nested_selector', args ),
        createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'a11y_nested_selector', args )
      },
      cascade: {
        format: ( args: IntentionalAny ): string => formatPattern( 'a11y_nested_cascade', args ),
        createProperty: ( args: IntentionalAny ): TReadOnlyProperty<string> => formatToProperty( 'a11y_nested_cascade', args )
      }
    }
  }
};

export default ChainsFluent;

chains.register( 'ChainsFluent', ChainsFluent );
