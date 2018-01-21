import React, {Component} from 'react';
import {addAlarm} from '../actions/alarmActions';
import {connect} from 'react-redux';
import store from '../store';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

class TitleBar extends Component {
    render() {
        return (
            <View style={styles.toolbar}>
                <Text style={styles.button}></Text>
                <Text style={styles.title}>WeekendAlarm</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.addAlarm}>
                    <Text style={styles.text}>Add Alarm</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addAlarm() {
        store.dispatch(addAlarm({time: '1pm', days: 'MWF'}));
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#236ce0',
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        textAlign: 'center'
    },
    button: {
        width: 50
    }
});

export default TitleBar;