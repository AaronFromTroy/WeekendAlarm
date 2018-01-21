import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TitleBar from './titleBar';
import SnoozedAlarmList from './snoozedAlarmList';
//import AlarmList from '../components/alarmList';

class AlarmApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TitleBar/>
                <SnoozedAlarmList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

export default AlarmApp;