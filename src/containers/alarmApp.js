import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import TitleBar from '../components/titleBar';
import AlarmList from '../components/alarmList';
import AddAlarm from './addAlarm';
import {changePage} from '../actions/navigationActions';
import {bindActionCreators} from 'redux';

import * as constants from '../constants/constants';

class AlarmApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TitleBar changePage={this.props.changePage} alarms={this.props.alarms} page={this.props.page}/>
                {this.renderMainView()}
            </View>
        );
    }

    renderMainView = () => {
        switch(this.props.page) {
            case constants.PAGE_ADD_ALARM:
                return <AddAlarm/>;
            case constants.PAGE_ALARM_LIST:
                return <AlarmList alarms={this.props.alarms}/>;
            default:
                return <AddAlarm/>;
        }
    } 
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        page: state.page,
        alarms: state.alarms
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePage: (page) => changePage(page)
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AlarmApp);