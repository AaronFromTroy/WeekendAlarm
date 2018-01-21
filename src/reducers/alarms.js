import * as actions from '../actions/actionTypes';
import _ from 'lodash';

const alarms = (state = {alarms: []}, action) => {
    switch(action.type) {
        case actions.ADD_ALARM:
            return Object.assign([], state.alarms, {
                id: _.uniqueId('alarm_'),
                time: action.time,
                days: action.days,
                snoozed: false
            });
        case actions.DELETE_ALARM:
            return Object.assign([], 
                state.alarms.filter(alarm => alarm.id !== action.id)
            );
        default:
            return state;   
    }
};

export default alarms;