import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dict from './modules/dict';
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

// 브라우져 히스토리 만들기
export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ dict });
const store = createStore(rootReducer, enhancer)

export default store;