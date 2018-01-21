import {connect} from 'react-redux';
import {deleteAlarm} from '../actions/alarmActions';
import AlarmList from '../components/alarmList';

const mapStateToProps = (state) => ({
    alarms: state
});

const mapDispatchToProps = {
    onAlarmClick: deleteAlarm
}

const SnoozedAlarmList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlarmList);

export default SnoozedAlarmList;