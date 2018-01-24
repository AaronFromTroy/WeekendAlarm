import React, {Component} from 'react';
import * as constants from '../constants/constants';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.toolbar}>
                {this.props.page === constants.PAGE_ADD_ALARM ?
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => this.handleChangePage(constants.PAGE_ALARM_LIST)}>
                        <Text style={styles.text}>{'< Back'}</Text>
                    </TouchableOpacity>
                    : <Text style={styles.button}></Text>
                }
                <Text style={styles.title}>WeekendAlarm</Text>
                {this.props.page === constants.PAGE_ALARM_LIST ?
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => this.handleChangePage(constants.PAGE_ADD_ALARM)}>
                        <Text style={styles.text}>Add</Text>
                    </TouchableOpacity>
                    : <Text style={styles.button}></Text>
                }
            </View>
        );
    }

    handleChangePage = (page) => {
        this.props.changePage(page);
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
        textAlign: 'center',
        paddingTop: 10,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    button: {
        width: 50
    }
});

export default TitleBar;