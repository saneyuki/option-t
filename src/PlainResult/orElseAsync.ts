import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncRecoveryFromErrorFn } from '../internal/Function';
import { Result, isOk } from './Result';
import { unwrapErrFromResult } from './unwrap';

export type ResultAsyncTryRecoveryFromErrorFn<T, E, F> = AsyncRecoveryFromErrorFn<E, Result<T, F>>;

/**
 *  @deprecated Use ResultAsyncTryRecoveryFromErrorFn in the same module.
 */
export type AsyncFlatmapErrFn<T, E, F> = ResultAsyncTryRecoveryFromErrorFn<T, E, F>;

/**
 *  Calls _recoverer_ and return its returned value if the result is `Err(E)`,
 *  otherwise returns the `Ok(T)` value of self.
 */
export function orElseAsyncForResult<T, E, F>(
    input: Result<T, E>,
    recoverer: ResultAsyncTryRecoveryFromErrorFn<T, E, F>
): Promise<Result<T, F>> {
    if (isOk(input)) {
        return Promise.resolve(input);
    }

    const inner = unwrapErrFromResult(input);
    const defaultValue: Promise<Result<T, F>> = recoverer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
