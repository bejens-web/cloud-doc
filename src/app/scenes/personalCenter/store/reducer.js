import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    isEdit: false,
});

// reducer可以接受state但是绝对不能修改state
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.MODAL_SHOW:
            return state.set('isEdit', true);
        case constants.MODAL_HIDE:
            return state.set('isEdit', false);
        default:
            return state
    }
}
