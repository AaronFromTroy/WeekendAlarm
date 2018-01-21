import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

const Alarm = (props) => {
    return (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'left'}}>
            <Text>{props.time}</Text>
            <Text>{props.days}</Text>
        </View>
    );
};

export default Alarm;