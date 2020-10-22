import {combineReducers} from "redux-immutable";
import {reducer as HomeReducer} from '@/scenes/home/store';
import {reducer as HeaderReducer} from '@/components/menu/store';
import {reducer as PersonalCenterReducer} from '@/scenes/personalCenter/store';

const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    personalCenter: PersonalCenterReducer
});

export default reducer;
