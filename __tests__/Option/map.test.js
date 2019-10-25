'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.map()', function(){
    describe('self is `None`', function () {
        let option = null;
        let isNotCalled = true;

        before(function(){
            const none = createNone();
            option = none.map(function(){ // eslint-disable-line array-callback-return
                isNotCalled = false;
            });
        });

        it('the returned value shoule be `None`: 1', function() {
            assert.strictEqual(option.isSome, false);
        });

        it('the returned value shoule be `None`: 2', function() {
            assert.strictEqual(option.isNone, true);
        });

        it('the passed function should not be called', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`', function () {
        const EXPECTED = '1';
        let option = null;

        before(function(){
            const some = createSome(1);
            option = some.map(function(val){
                assert.notStrictEqual(val, EXPECTED);
                return EXPECTED;
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });
});