import produce from "../utils/produce";

export const initialState = {
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    signUpData: {},
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';


export const signUpAction = (data) => {
    dispatchEvent(signUpRequestAction(data));
}

export const signUpRequestAction = (data) => ({
    type: SIGN_UP_REQUEST,
    data,
});


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpDone = false;
            draft.signUpError = null;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpLoading = flase;
            draft.signUpError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;
