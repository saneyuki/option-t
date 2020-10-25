import test from 'ava';

import { tapNullable } from '../../__dist/esm/Nullable/tap.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const input of nonNullableValue) {
    test('pass the value: ' + String(input), (t) => {
        t.plan(3);

        const result = tapNullable(input, (v) => {
            t.pass();
            t.is(v, input, 'the arg is input');
        });

        t.is(result, input);
    });
}

test('pass null', (t) => {
    t.plan(1);

    const result = tapNullable(null, (_v) => {
        t.fail();
    });
    t.is(result, null);
});

test('pass undefined', (t) => {
    t.plan(3);

    const INPUT = undefined;

    const result = tapNullable(INPUT, (v) => {
        t.pass();
        t.is(v, INPUT, 'the arg is INPUT');
    });

    t.is(result, INPUT);
});