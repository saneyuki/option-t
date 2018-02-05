import { Option } from './Option';
import { Result, createErr, createOk } from '../PlainResult/Result';

/**
 * Transforms the `Option<T>` into a `Result<T, E>`,
 * mapping `Some(v)` to `Ok(v)` and None to Err(err).
 *
 * Arguments passed to this are eagerly evaluated;
 * if you are passing the result of a function call, it is recommended to use okOrElse, which is lazily evaluated.
 */
export function okOrForPlainOption<T, E>(input: Option<T>, err: E): Result<T, E> {
    if (input.ok) {
        const v = createOk<T>(input.val);
        return v;
    }
    else {
        const e = createErr<E>(err);
        return e;
    }
}
