import * as actions from './actionTypes';

export function changePage(page) {
    return {
        type: actions.CHANGE_PAGE,
        page: page
    };
}