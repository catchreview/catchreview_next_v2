import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';

const rootReducer = (state, action) => {

    switch (action.type) {
        case HYDRATE :
            return action.payload;
        default : {
            const combinedReducer = combineReducers({
                user,
                auth,
            });
            return combinedReducer(state, action);
        }
    }

}

export default rootReducer;