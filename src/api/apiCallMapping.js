import * as loginActions from '../components/Login/actions'

import AuthService from '../services/authService'

export const apiCallMapping = (action) => {
    const actionCallMap = {
        [loginActions.SIGN_IN_REQUEST]: AuthService.signIn
    }

    if(!actionCallMap[action.type]){
        throw new Error('Not Mapped Action')
    }

    return actionCallMap[action.type]
}