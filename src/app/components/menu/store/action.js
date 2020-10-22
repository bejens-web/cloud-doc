import * as constants from './constants'
import {fromJS} from "immutable";

export const LoadingShow = () => ({
    type: constants.LOADING_SHOW
});


export const LoadingHide = () => ({
    type: constants.LOADING_HIDE
});
