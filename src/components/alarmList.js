import React, {Component} from 'react';
import {
    View, FlatList, Text, StyleSheet
} from 'react-native';
import Alarm from './alarm';

class AlarmList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.alarms}
                    keyExtractor={alarm => alarm.id}
                    renderItem={alarm => <Alarm alarm={alarm}/>}
                    ItemSeparatorComponent={()=><View style={style.seperator}/>}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    seperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bbb'
    }
});

export default AlarmList;