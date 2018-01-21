import * as actions from './actionTypes';
import _ from 'lodash';

export function addAlarm(alarm) {
    return {
        type: actions.ADD_ALARM,
        alarm: {
            time: alarm.time,
            days: alarm.days
        }
    };
}

export function deleteAlarm(id) {
    return {
        type: actions.DELETE_ALARM,
        id: id
    };
}

export function editAlarm(alarm) {
    return {
        type: actions.EDIT_ALARM,
        alarm: alarm
    };
}