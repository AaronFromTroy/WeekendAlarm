import {connect} from 'react-redux';
import {deleteAlarm} from '../actions/alarmActions';
import AlarmList from '../components/alarmList';

const mapStateToProps = (state) => ({
    alarms: state.alarms
});

const FullAlarmList = connect(
    mapStateToProps
)(AlarmList);

export default FullAlarmList;