import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import signup from './signup';

const rootReducer = (state, action) => {

    switch (action.type) {
        case HYDRATE :
            return action.payload;
        default : {
            const combinedReducer = combineReducers({
                user,
                auth,
                signup,
            });
            return combinedReducer(state, action);
        }
    }

}

export default rootReducer;