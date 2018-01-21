import {createStore} from 'redux';
import alarms from './reducers/alarms';

const store = createStore(alarms);

export default store;