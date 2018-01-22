import * as actions from '../actions/actionTypes';
import * as constants from '../constants/constants';

const page = (page = constants.PAGE_ALARM_LIST, action) => {
    switch(action.type) {
        case actions.CHANGE_PAGE:
            return action.page;
        default:
            return page;   
    }
};

export default page;