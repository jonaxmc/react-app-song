import { types } from "../types/types";

const initialState = JSON.parse(sessionStorage.getItem('datos')) || {}
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveData:
            return{
             
                datos: action.payload
            }
        case types.saveHistorial:
            return{
                datos: action.payload
            }

    
        default:
            return state;
    }
}