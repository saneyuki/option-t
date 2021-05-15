export default {
    '.': {
        'path': 'index',
        'exports': []
    },

    'Maybe': {
        'path': 'Maybe/index',
        'exports': [
            'isNotNullAndUndefined',
            'isNullOrUndefined',
            'andThen',
            'andThenAsync',
            'expect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },
    'Maybe/and': {
        'exports': [
            'andForMaybe'
        ]
    },
    'Maybe/andThen': {
        'exports': [
            'andThenForMaybe'
        ]
    },
    'Maybe/andThenAsync': {
        'exports': [
            'andThenAsyncForMaybe'
        ]
    },
    'Maybe/expect': {
        'exports': [
            'expectNotNullAndUndefined'
        ]
    },
    'Maybe/map': {
        'exports': [
            'mapForMaybe'
        ]
    },
    'Maybe/mapAsync': {
        'exports': [
            'mapAsyncForMaybe'
        ]
    },
    'Maybe/Maybe': {
        'exports': [
            'isNotNullAndUndefined',
            'isNullOrUndefined',
        ]
    },
    'Maybe/mapOr': {
        'exports': [
            'mapOrForMaybe'
        ]
    },
    'Maybe/mapOrAsync': {
        'exports': [
            'mapOrAsyncForMaybe'
        ]
    },
    'Maybe/mapOrElse': {
        'exports': [
            'mapOrElseForMaybe'
        ]
    },
    'Maybe/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForMaybe'
        ]
    },
    'Maybe/or': {
        'exports': [
            'orForMaybe'
        ]
    },
    'Maybe/orElse': {
        'exports': [
            'orElseForMaybe'
        ]
    },
    'Maybe/orElseAsync': {
        'exports': [
            'orElseAsyncForMaybe'
        ]
    },
    'Maybe/tap': {
        'exports': [
            'tapMaybe'
        ]
    },
    'Maybe/unwrap': {
        'exports': [
            'unwrapMaybe'
        ]
    },
    'Maybe/unwrapOr': {
        'exports': [
            'unwrapOrFromMaybe'
        ]
    },
    'Maybe/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromMaybe'
        ]
    },
    'Maybe/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromMaybe'
        ]
    },
    'Maybe/xor': {
        'exports': [
            'xorForMaybe'
        ]
    },

    'Nullable': {
        'path': 'Nullable/index',
        'exports': [
            'isNotNull',
            'isNull',
            'andThen',
            'andThenAsync',
            'expect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },
    'Nullable/and': {
        'exports': [
            'andForNullable',
        ]
    },
    'Nullable/andThen': {
        'exports': [
            'andThenForNullable'
        ]
    },
    'Nullable/andThenAsync': {
        'exports': [
            'andThenAsyncForNullable'
        ]
    },
    'Nullable/expect': {
        'exports': [
            'expectNotNull',
        ]
    },
    'Nullable/map': {
        'exports': [
            'mapForNullable'
        ]
    },
    'Nullable/mapAsync': {
        'exports': [
            'mapAsyncForNullable'
        ]
    },
    'Nullable/mapOr': {
        'exports': [
            'mapOrForNullable',
        ]
    },
    'Nullable/mapOrAsync': {
        'exports': [
            'mapOrAsyncForNullable',
        ]
    },
    'Nullable/mapOrElse': {
        'exports': [
            'mapOrElseForNullable'
        ]
    },
    'Nullable/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForNullable'
        ]
    },
    'Nullable/Nullable': {
        'exports': [
            'isNotNull',
            'isNull',
        ]
    },
    'Nullable/or': {
        'exports': [
            'orForNullable'
        ]
    },
    'Nullable/orElse': {
        'exports': [
            'orElseForNullable'
        ]
    },
    'Nullable/orElseAsync': {
        'exports': [
            'orElseAsyncForNullable'
        ]
    },
    'Nullable/tap': {
        'exports': [
            'tapNullable'
        ]
    },
    'Nullable/unwrap': {
        'exports': [
            'unwrapNullable'
        ]
    },
    'Nullable/unwrapOr': {
        'exports': [
            'unwrapOrFromNullable'
        ]
    },
    'Nullable/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromNullable'
        ]
    },
    'Nullable/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromNullable'
        ]
    },
    'Nullable/xor': {
        'exports': [
            'xorForNullable'
        ]
    },

    'PlainOption': {
        'path': 'PlainOption/index',
        'exports': [
            'createSome',
            'createNone',
            'isSome',
            'isNone',
            'and',
            'andThen',
            'equal',
            'expect',
            'filter',
            'flatten',
            'map',
            'mapOr',
            'mapOrElse',
            'or',
            'orElse',
            'transpose',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse'
        ]
    },

    'PlainOption/and': {
        'exports': [
            'andForOption'
        ]
    },
    'PlainOption/andThen': {
        'exports': [
            'andThenForOption'
        ]
    },
    'PlainOption/asMut': {
        'exports': [
            'asMutOption'
        ]
    },
    'PlainOption/drop': {
        'exports': [
            'unsafeDropForOption'
        ]
    },
    'PlainOption/equal': {
        'exports': [
            'equalForOption'
        ]
    },
    'PlainOption/expect': {
        'exports': [
            'expectIsSome'
        ]
    },
    'PlainOption/filter': {
        'exports': [
            'filterForOption',
        ]
    },
    'PlainOption/flatten': {
        'exports': [
            'flattenForOption'
        ]
    },
    'PlainOption/map': {
        'exports': [
            'mapForOption'
        ]
    },
    'PlainOption/mapOr': {
        'exports': [
            'mapOrForOption'
        ]
    },
    'PlainOption/mapOrElse': {
        'exports': [
            'mapOrElseForOption'
        ]
    },
    'PlainOption/okOr': {
        'exports': [
            'okOrForPlainOption'
        ]
    },
    'PlainOption/okOrElse': {
        'exports': [
            'okOrElseForPlainOption'
        ]
    },
    'PlainOption/Option': {
        'exports': [
            'isSome',
            'isNone',
            'createSome',
            'createNone'
        ]
    },
    'PlainOption/or': {
        'exports': [
            'orForOption'
        ]
    },
    'PlainOption/orElse': {
        'exports': [
            'orElseForOption'
        ]
    },
    'PlainOption/transpose': {
        'exports': [
            'transposeForOption'
        ]
    },
    'PlainOption/tap': {
        'exports': [
            'tapOption'
        ]
    },
    'PlainOption/unwrap': {
        'exports': [
            'unwrapOption'
        ]
    },
    'PlainOption/unwrapOr': {
        'exports': [
            'unwrapOrFromOption'
        ]
    },
    'PlainOption/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromOption'
        ]
    },
    'PlainOption/xor': {
        'exports': [
            'xorForOption'
        ]
    },

    'PlainResult': {
        'path': 'PlainResult/index',
        'exports': [
            'createOk',
            'createErr',
            'isOk',
            'isErr',
            'and',
            'andThen',
            'andThenAsync',
            'equal',
            'expect',
            'expectErr',
            'flatten',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'mapErr',
            'mapErrAsync',
            'or',
            'orElse',
            'orElseAsync',
            'tapOk',
            'tapErr',
            'tapBoth',
            'transpose',
            'toOptionFromOk',
            'toOptionFromErr',
            'unwrap',
            'unwrapErr',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },


    'PlainResult/and': {
        'exports': [
            'andForResult'
        ]
    },
    'PlainResult/andThen': {
        'exports': [
            'andThenForResult'
        ]
    },
    'PlainResult/andThenAsync': {
        'exports': [
            'andThenAsyncForResult'
        ]
    },
    'PlainResult/asMut': {
        'exports': [
            'asMutResult'
        ]
    },
    'PlainResult/drop': {
        'exports': [
            'unsafeDropBothForResult',
            'unsafeDropOkForResult',
            'unsafeDropErrForResult',
        ]
    },
    'PlainResult/equal': {
        'exports': [
            'equalForResult',
        ]
    },
    'PlainResult/expect': {
        'exports': [
            'expectIsOk',
            'expectIsErr',
        ]
    },
    'PlainResult/flatten': {
        'exports': [
            'flattenForResult'
        ]
    },
    'PlainResult/map': {
        'exports': [
            'mapForResult'
        ]
    },
    'PlainResult/mapAsync': {
        'exports': [
            'mapAsyncForResult'
        ]
    },
    'PlainResult/mapErr': {
        'exports': [
            'mapErrForResult',
        ]
    },
    'PlainResult/mapErrAsync': {
        'exports': [
            'mapErrAsyncForResult',
        ]
    },
    'PlainResult/mapOr': {
        'exports': [
            'mapOrForResult'
        ]
    },
    'PlainResult/mapOrAsync': {
        'exports': [
            'mapOrAsyncForResult'
        ]
    },
    'PlainResult/mapOrElse': {
        'exports': [
            'mapOrElseForResult'
        ]
    },
    'PlainResult/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForResult'
        ]
    },
    'PlainResult/or': {
        'exports': [
            'orForResult'
        ]
    },
    'PlainResult/orElse': {
        'exports': [
            'orElseForResult'
        ]
    },
    'PlainResult/orElseAsync': {
        'exports': [
            'orElseAsyncForResult'
        ]
    },
    'PlainResult/Result': {
        'exports': [
            'isOk',
            'createOk',
            'isErr',
            'createErr'
        ]
    },
    'PlainResult/tap': {
        'exports': [
            'tapOk',
            'tapErr',
            'tapBoth',
        ]
    },
    'PlainResult/toOption': {
        'exports': [
            'toOptionFromOk',
            'toOptionFromErr'
        ]
    },
    'PlainResult/transpose': {
        'exports': [
            'transposeForResult',
        ]
    },
    'PlainResult/unwrap': {
        'exports': [
            'unwrapFromResult',
            'unwrapErrFromResult',
        ]
    },
    'PlainResult/unwrapOr': {
        'exports': [
            'unwrapOrFromResult'
        ]
    },
    'PlainResult/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromResult'
        ]
    },
    'PlainResult/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromResult'
        ]
    },

    'Undefinable': {
        'path': 'Undefinable/index',
        'exports': [
            'isNotUndefined',
            'isUndefined',
            'andThen',
            'andThenAsync',
            'expect',
            'map',
            'mapAsync',
            'mapOr',
            'mapOrAsync',
            'mapOrElse',
            'mapOrElseAsync',
            'orElse',
            'orElseAsync',
            'tap',
            'unwrap',
            'unwrapOr',
            'unwrapOrElse',
            'unwrapOrElseAsync',
        ]
    },

    'Undefinable/and': {
        'exports': [
            'andForUndefinable',
        ]
    },
    'Undefinable/andThen': {
        'exports': [
            'andThenForUndefinable'
        ]
    },
    'Undefinable/andThenAsync': {
        'exports': [
            'andThenAsyncForUndefinable'
        ]
    },
    'Undefinable/expect': {
        'exports': [
            'expectNotUndefined'
        ]
    },
    'Undefinable/map': {
        'exports': [
            'mapForUndefinable'
        ]
    },
    'Undefinable/mapAsync': {
        'exports': [
            'mapAsyncForUndefinable'
        ]
    },
    'Undefinable/mapOr': {
        'exports': [
            'mapOrForUndefinable'
        ]
    },
    'Undefinable/mapOrAsync': {
        'exports': [
            'mapOrAsyncForUndefinable'
        ]
    },
    'Undefinable/mapOrElse': {
        'exports': [
            'mapOrElseForUndefinable'
        ]
    },
    'Undefinable/mapOrElseAsync': {
        'exports': [
            'mapOrElseAsyncForUndefinable'
        ]
    },
    'Undefinable/or': {
        'exports': [
            'orForUndefinable'
        ]
    },
    'Undefinable/orElse': {
        'exports': [
            'orElseForUndefinable'
        ]
    },
    'Undefinable/orElseAsync': {
        'exports': [
            'orElseAsyncForUndefinable'
        ]
    },
    'Undefinable/tap': {
        'exports': [
            'tapUndefinable'
        ]
    },
    'Undefinable/Undefinable': {
        'exports': [
            'isNotUndefined',
            'isUndefined',
        ]
    },
    'Undefinable/unwrap': {
        'exports': [
            'unwrapUndefinable'
        ]
    },
    'Undefinable/unwrapOr': {
        'exports': [
            'unwrapOrFromUndefinable'
        ]
    },
    'Undefinable/unwrapOrElse': {
        'exports': [
            'unwrapOrElseFromUndefinable'
        ]
    },
    'Undefinable/unwrapOrElseAsync': {
        'exports': [
            'unwrapOrElseAsyncFromUndefinable'
        ]
    },
    'Undefinable/xor': {
        'exports': [
            'xorForUndefinable'
        ]
    },

    /*
        // TODO:
        // 'Maybe/ErrorMessage': [],
        // TODO:
        // 'Nullable/ErrorMessage': [],
        // TODO:
        // 'Option': [],
        // TODO:
        // 'Result': [],
        // TODO:
        // 'Undefinable/ErrorMessage': [],
        // TODO:
        // 'index': [],
    */
};
