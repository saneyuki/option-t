import test from 'ava';

const { createSome, createNone, } = require('../../__dist/cjs/Option');

test('self is `None`', function (t) {
    const EXPECTED = 1;

    const option = createNone();
    const result = option.unwrapOrElse(function () {
        return EXPECTED;
    });
    t.is(result, EXPECTED);
});

test('self is `Some<T>`', function (t) {
    const EXPECTED = 1;
    const DEFAULT = 100;

    t.is(EXPECTED !== DEFAULT, true);

    const option = createSome(EXPECTED);
    const result = option.unwrapOrElse(function () {
        t.fail('shoule not call callback');
        return DEFAULT;
    });

    t.is(result, EXPECTED, 'shoule be the wrapped value');
});
