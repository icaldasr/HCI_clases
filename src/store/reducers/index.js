import { combineReducers } from  'redux';

import uiReducer from './ui';

const allReducers = combineReducers({
    uiReducer
});

export default allReducers;