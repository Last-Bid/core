/*
 * action types
 */
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

/*
 * action creators
 */
export function fetchProductsRequest(data) {
    return {
        type: FETCH_PRODUCTS_REQUEST,
        data : data }
}
export function fetchProductsSuccess(data) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        data : data }
}
export function fetchProductsFailure(data) {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        data : data }
}
