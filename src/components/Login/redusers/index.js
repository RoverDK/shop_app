import * as actions from '../actions'
import {handleActions} from 'redux-actions'

const defaultState = {
    isLoading: false,
    errors: null,
    userData: {},
    accessToken: null,
}

export const authReducer = handleActions({
    [actions.SIGN_IN_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
        errors: null,
    }),
    [actions.SIGN_IN_SUCCESS]: (state, {payload}) => {
        const {accessToken, ...userData} = payload.response

        return {
            ...state,
            isLoading: false,
            userData,
            accessToken,
        }
    },
    [actions.SIGN_IN_FAIL]: (state, {payload}) => ({
        ...state,
        isLoading: false,
        errors: payload.response,
    })
}, defaultState)

