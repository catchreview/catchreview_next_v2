import produce from "../utils/produce";

export const initialState = {
    isAuthorized: false,
    me : {
        name: 'jake'
    }
}

export const AUTH_SAVE = "AUTH_SAVE";

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case AUTH_SAVE:
            draft.me = action.data
            draft.isAuthorized = true
            break;
        default:
            break;
    }
});

export default reducer;
