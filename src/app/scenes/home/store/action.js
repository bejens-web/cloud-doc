import {fromJS} from "immutable";
import * as constants from './constants';
import {LoadingShow, LoadingHide} from '@/components/menu/store/action'

//首页信息Action
const HomeInfoAction = (data) => {
    return {
        type: constants.HOME_INFO,
        data: fromJS(data)
    }
};


