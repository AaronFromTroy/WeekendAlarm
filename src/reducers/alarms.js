import * as actions from '../actions/actionTypes';
import _ from 'lodash';

const alarms = (alarms = [], action) => {
    switch(action.type) {
        case actions.ADD_ALARM:
            return [
                ...alarms,
                {
                    id: _.uniqueId('alarm_'),
                    time: action.alarm.time,
                    days: action.alarm.days,
                    snoozed: false
                }
            ];
        case actions.DELETE_ALARM:
            return Object.assign([], 
                alarms.filter(alarm => alarm.id !== action.id)
            );
        default:
            return alarms;   
    }
};

export default alarms;