import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { fileReducer } from "../reducers/fileReducer";
import thunk from 'redux-thunk';
import { dataReducer } from "../reducers/dataReducer";
import { pathReducer } from "../reducers/pathReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    path: pathReducer,
    file: fileReducer,
    data: dataReducer,
    
});


export const store = createStore(

    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );