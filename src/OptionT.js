/**
 * MIT License
 *
 * Copyright (c) 2015 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

/**
 *  @constructor
 *  @template   T
 *
 *  A base object of `Option<T>`.
 *  This is only used to `option instanceof OptionT`
 *  in an language environment which does not have an interface type system.
 *
 *  The usecase example is a `React.PropTypes.
 */
var OptionT = function OptionTBase() {};
OptionT.prototype = Object.freeze({
    /**
     *  Return whether this is `Some<T>` or not.
     *
     *  @return {boolean}
     */
    get isSome() {
        return this.is_some;
    },

    /**
     *  Return whether this is `None` or not.
     *
     *  @return {boolean}
     */
    get isNone() {
        return !this.is_some;
    },

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *
     *  @template   T
     *
     *  @return {T}
     *  @throws {Error}
     *      Throws if the self value equals `None`.
     */
    unwrap: function OptionTUnwrap() {
        if (!this.is_some) {
            throw new Error('called `unwrap()` on a `None` value');
        }

        return this.value;
    },

    /**
     *  Returns the contained value or a default value `def`.
     *
     *  @template   T
     *
     *  @param  {T} def
     *  @return {T}
     */
    unwrapOr: function OptionTUnwrapOr(def) {
        return this.is_some ? this.value : def;
    },

    /**
     *  Returns the contained value or computes it from a closure `fn`.
     *
     *  @template   T
     *
     *  @param  {function(): T} fn
     *  @return {T}
     */
    unwrapOrElse: function OptionTUnwrapOrElse(fn) {
        return this.is_some ? this.value : fn();
    },

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *
     *  @template   T
     *
     *  @param  {string}  msg
     *  @return {T}
     *  @throws {Error}
     *      Throws a custom error with provided `msg`
     *      if the self value equals `None`.
     */
    expect: function OptionTExpect(msg) {
        if (!this.is_some) {
            throw new Error(msg);
        }

        return this.value;
    },

    /**
     *  Maps an `Option<T>` to `Option<U>` by applying a function to a contained value.
     *
     *  @template   T, U
     *
     *  @param  {function(T):U}    fn
     *  @return {!Option<U>}
     */
    map: function OptionTMap(fn) {
        if (!this.is_some) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var value = fn(this.value);
        var option = new Some(value);
        return option;
    },

    /**
     *  Returns `None` if the self is `None`,
     *  otherwise calls `fn` with the wrapped value and returns the result.
     *
     *  @template   T, U
     *
     *  @param  {function(T): !Option<U>}    fn
     *  @return {!Option<U>}
     */
    flatMap: function OptionTFlatMap(fn) {
        if (!this.is_some) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var mapped = fn(this.value);
        var isOption = (mapped instanceof OptionT);
        if (!isOption) {
            throw new Error('Option<T>.flatMap()\' param `fn` should return `Option<T>`.');
        }

        return mapped;
    },

   /**
     *  Applies a function `fn` to the contained value or returns a default `def`.
     *
     *  XXX: this API is unstable. See: https://github.com/saneyuki/option-t.js/pull/50
     *
     *  @template   T, U
     *
     *  @param  {U} def
     *  @param  {function(T):U} fn
     *  @return {U}
     */
    mapOr: function OptionTMapOr(def, fn) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Option<T>.mapOr() is experimental. This might be breaking changed whenever.');
        }

        if (this.is_some) {
            return fn(this.value);
        }
        else {
            return def;
        }
    },

   /**
     *  Applies a function `fn` to the contained value or computes a default result by `defFn`.
     *
     *  XXX: this API is unstable. See: https://github.com/saneyuki/option-t.js/pull/50
     *
     *  @template   T, U
     *
     *  @param  {function():U}  defFn
     *  @param  {function(T):U} fn
     *  @return {U}
     */
    mapOrElse: function OptionTMapOrElse(defFn, fn) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Option<T>.mapOrElse() is experimental. This might be breaking changed whenever.');
        }

        if (this.is_some) {
            return fn(this.value);
        }
        else {
            return defFn();
        }
    },

    /**
     *  Returns `None` if the self is `None`, otherwise returns `optb`.
     *
     *  @template   U
     *
     *  @param  {!Option<U>} optb
     *  @return {!Option<U>}
     */
    and: function OptionTAnd(optb) {
        return this.is_some ? optb : this;
    },

    /**
     *  The alias of `Option<T>.flatMap()`.
     *
     *  @template   T, U
     *
     *  @param  {function(T): !Option<U>}    fn
     *  @return {!Option<U>}
     */
    andThen: function OptionTAndThen(fn) {
        return this.flatMap(fn);
    },

    /**
     *  Returns the self if it contains a value, otherwise returns `optb`.
     *
     *  @template   T
     *
     *  @param  {!Option<T>} optb
     *  @return {!Option<T>}
     */
    or: function OptionTOr(optb) {
        return this.is_some ? this : optb;
    },

    /**
     *  Returns the self if it contains a value,
     *  otherwise calls `fn` and returns the result.
     *
     *  @template   T
     *
     *  @param  {function(): !Option<T>} fn
     *  @return {!Option<T>}
     */
    orElse: function OptionTOr(fn) {
        if (this.is_some) {
            return this;
        }
        else {
            var value = fn();
            if (value instanceof OptionT) {
                return value;
            }

            throw new Error('Option<T>.orElse()\' param `fn` should return `Option<T>`.');
        }
    },

    /**
     *  Cast the self as Promise.
     *
     *  If `T` is `Promise<U>`, then the wrapped `Promise<U>` is flatten automatically.
     *  So this will returns `Promise<U>`.
     *
     *  @template   T
     *  @return {Promise<T>};
     */
    asPromise: function OptionTAsPromise() {
        return this.is_some ? Promise.resolve(this.value) : Promise.reject();
    },

    /**
     *  Finalize the self.
     *  After this is called, the object's behavior is not defined.
     *
     *  @return {void}
     */
    drop: function OptionTDrop() {
        this.value = null;
        Object.freeze(this);
    },
});

var OptionPrototype = new OptionT();

/**
 *  @constructor
 *  @template   T
 *  @extends    {OptionT<T>}
 *
 *  @param  {T}   val
 */
var Some = function OptionTSome(val) {
    /* eslint-disable camelcase */
    /**
     *  @private
     *  @type   {boolean}
     */
    this.is_some = true;
    /* eslint-enable */

    /**
     *  @private
     *  @type   {T}
     */
    this.value = val;
    Object.seal(this);
};
Some.prototype = OptionPrototype;

/**
 *  @constructor
 *  @template   T
 *  @extends    {OptionT<T>}
 */
var None = function OptionTNone() {
    /* eslint-disable camelcase */
    /**
     *  @private
     *  @type   {boolean}
     */
    this.is_some = false;
    /* eslint-enable */

    /**
     *  @private
     *  @type   {T}
     */
    this.value = undefined;
    Object.seal(this);
};
None.prototype = OptionPrototype;

module.exports = {
    Some: Some,
    None: None,
    OptionT: OptionT,
};