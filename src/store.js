import {createStore, combineReducers} from 'redux';
import reducers from './reducers/index';
//import alarms from './reducers/alarms';

const store = createStore(combineReducers(reducers));

export default store;