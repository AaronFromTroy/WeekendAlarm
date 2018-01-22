import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import store from '../store';
import TitleBar from './titleBar';
import FullAlarmList from './fullAlarmList';
import AddAlarm from './addAlarm';

import * as constants from '../constants/constants';

class AlarmApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(store.getState());
        var focusedView = null;
        if (store.getState().page === constants.PAGE_ALARM_LIST) {
            focusedView = <FullAlarmList/>
        } else if (store.getState().page === constants.PAGE_ADD_ALARM) {
            focusedView = <AddAlarm/>;
        } else {
            focusedView = <FullAlarmList/>;
        }

        return (
            <View>
                <TitleBar page={store.getState().page}/>
                {focusedView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    return {
        alarms: state.alarms,
        page: state.page
    }
}

export default connect(mapStateToProps)(AlarmApp);