import {createStore, combineReducers} from 'redux'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    data: dataReducer
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())