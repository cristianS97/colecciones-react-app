import { types } from "../types/types";

const initialState = {
    logged: false
};

export default (state=initialState, action) => {
    switch(action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: {
                    email: action.payload.email,
                    name: action.payload.name
                }
            }
        case types.logout:
            return initialState;
        default:
            return state;
    }
}