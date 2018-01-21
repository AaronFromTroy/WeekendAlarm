import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Alarm = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{props.alarm.item.days}</Text>
            <Text style={style.time}>{props.alarm.item.time}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    time: {
        fontSize: 20,
        color: '#000000'
    },
    text: {
        fontSize:15,
        color: '#828282'
    }
});

export default Alarm;