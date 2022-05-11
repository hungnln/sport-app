import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import UserManageReducer from './reducers/UserManageReducer';


const rootReducer = combineReducers({
    //Chứa state ứng dụng
    UserManageReducer,
});
let middleWare = applyMiddleware(reduxThunk)
let composeCustom = compose(middleWare,
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const store = createStore(rootReducer, composeCustom);