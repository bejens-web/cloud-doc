import React from "react";
import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    homeInfo: {},
    homeNews: {},
    homeCooperative: {},
    homeSource: {},
    homeControl : [
        'undo', 'redo', 'separator', 'separator', 'text-color',
        'bold', 'italic', 'underline', 'strike-through', 'separator',
        'remove-styles', 'separator', 'text-indent', 'text-align', 'separator',
        'blockquote', 'code', 'separator', 'link', 'separator', 'separator', 'separator', 'clear'
    ]
});

// reducer可以接受state但是绝对不能修改state
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.HOME_INFO:
            return state.set('homeInfo', (action.data));
        case constants.HOME_NEWS:
            return state.set('homeNews', (action.data));
        case constants.HOME_COOPERATIVE:
            return state.set('homeCooperative', (action.data));
        case constants.HOME_SOURCE:
            return state.set('homeSource', (action.data));
        default:
            return state
    }
}

