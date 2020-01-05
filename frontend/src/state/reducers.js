import './actions'
import { combineReducers } from "redux";

// initial state
const initialState = {
    count: 0,
    data: '',
    error: '',
};

const fetchProducts = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT_REQUEST':
            return {
                ...initialState,
                data: "LOADING",
            };
        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...initialState,
                data: "LOADING",
            };
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...initialState,
                data: 'SUCCESS'
            };
        default:
            return state
    }
};

const reducers = combineReducers({
    fetchProducts
});

export default reducers;