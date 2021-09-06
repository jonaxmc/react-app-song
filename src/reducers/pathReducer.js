import { types } from "../types/types";


export const pathReducer = (state = '', action) => {
    switch (action.type) {
        case types.pathLoading:
            return action.payload
            
    
        default:
            return state;
    }

}