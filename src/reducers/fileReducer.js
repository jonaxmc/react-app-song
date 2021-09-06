
import { types } from '../types/types';

export const fileReducer = (state = {}, action) => {
    switch (action.type) {
        case types.uploadFile:
            return{
                file: action.payload.file
            }
        case types.sendFile:
            return{
                data: action.payload
            }
    
        default:
            return state;
    }
}
