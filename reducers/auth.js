import produce from "../utils/produce";

export const initialState = {
    logInError: false,
    logInSuccess: false,
    logInLoading: false,
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const logInRequestAction = (data) => ({
    type: LOGIN_REQUEST,
    data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            draft.logInLoading = true;
            break;
        case LOGIN_SUCCESS:
            draft.logInLoading = false;
            draft.logInSuccess = true;
            break;
        case LOGIN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = true;
            break;
        default:
            break;
    }
});

export default reducer;