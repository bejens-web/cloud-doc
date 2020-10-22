import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    loading: false,
    userInfo:{},
});

// reducer可以接受state但是绝对不能修改state
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.USER_INFO:
            return state.set('userInfo', (action.data));
        case constants.LOADING_SHOW:
            return state.set('loading', true);
        case constants.LOADING_HIDE:
            return state.set('loading', false);
        default:
            return state
    }
}
