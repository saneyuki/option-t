const ERR_MSG_MUST_RETURN_PROMISE = ' must return Promise';
const ERR_MSG_MUST_NOT_RETURN = ' must not return ';

const TRANSFORM_FUNCTION_NAME = '`transformer`';
const RECOVERY_FUNCTION_NAME = '`recoverer`';
const DEFAULT_VALUE_NAME = '`defaultValue`';

export const ERR_MSG_TRANSFORMER_MUST_NOT_RETURN =
    TRANSFORM_FUNCTION_NAME + ERR_MSG_MUST_NOT_RETURN;
export const ERR_MSG_CALLED_WITH = 'called with ';
export const ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE = DEFAULT_VALUE_NAME + ' must not be ';
export const ERR_MSG_RECOVERER_MUST_NOT_RETURN = RECOVERY_FUNCTION_NAME + ERR_MSG_MUST_NOT_RETURN;

export const ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE =
    TRANSFORM_FUNCTION_NAME + ERR_MSG_MUST_RETURN_PROMISE;

export const ERR_MSG_RECOVERER_MUST_RETURN_PROMISE =
    RECOVERY_FUNCTION_NAME + ERR_MSG_MUST_RETURN_PROMISE;