import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {addAlarm} from '../actions/alarmActions';
import store from '../store';
import DatePicker from 'react-native-datepicker';

class AddAlarm extends Component {
    constructor(props) {
        super(props);

        this.time = '12:00';
    }
    //TODO: Datepicker needs to be reworked for different styling. This is temporary

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>New Alarm</Text>
                <DatePicker
                    style={styles.pageElement}
                    date={this.time}
                    mode="time"
                    placeholder="Select Time"
                    format="HH:mm"
                    is24Hour={false}
                    onDateChange={(date) => {this.time = date}}
                />
                <Button
                    style={styles.pageElement}
                    title="Add Alarm"
                    color="#236ce0"
                    onPress={this.handleAddAlarm.bind(this)}
                />
            </View>
        );
    }

    handleAddAlarm(e) {
        store.dispatch(addAlarm({time: this.time, days: 'MWF'}));
        ToastAndroid.show('Alarm Added', ToastAndroid.SHORT);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        color: '#000000',
        paddingTop: 20,
        paddingBottom: 15
    },
    pageElement: {
        paddingBottom: 10
    }
});

export default AddAlarm;
