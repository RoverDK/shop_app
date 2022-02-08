import { createStore } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'

import rootReduser from './rootReduser'

export function configureStore(){
    return createStore(rootReduser, composeWithDevTools())
}