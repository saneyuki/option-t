import { Result } from './Result';

/**
 *  Return _input_ as `T` if the passed _input_ is `Ok(T)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectIsOk<T, E>(input: Result<T, E>, msg: string): T | never {
    if (!input.ok) {
        throw new TypeError(msg);
    }

    return input.val;
}

/**
 *  Return _input_ as `E` if the passed _input_ is `Err(E)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectIsErr<T, E>(input: Result<T, E>, msg: string): E | never {
    if (input.ok) {
        throw new TypeError(msg);
    }

    return input.err;
}
