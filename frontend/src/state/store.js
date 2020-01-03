import { createStore } from 'redux';
import fetchProducts from "./reducers";

const store = createStore(fetchProducts) // can add second arg as the initial state

export default store