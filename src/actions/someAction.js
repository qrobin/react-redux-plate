import types from './types';

export const someAction = (payload) => ({
    type: types.SOME_ACTION,
    payload: payload
});