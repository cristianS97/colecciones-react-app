import { types } from "../types/types";

export default (state, action) => {
    switch(action.type) {
        case types.login:
            console.log(state);
            console.log(action);
            return {
                ...state,
                logged: true,
                user: {
                    email: action.payload.email,
                    name: action.payload.name
                }
            }
        default:
            return state;
    }
}