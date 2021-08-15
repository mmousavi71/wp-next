export const authConstants = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGOUT_REQUEST: "LOGOUT_REQUEST",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAILURE: "LOGOUT_FAILURE",
    REFRESH_TOKEN_REQUEST: "REFRESH_TOKEN_REQUEST",
    REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS",
    REFRESH_TOKEN_FAILURE: "REFRESH_TOKEN_FAILURE",
    SET_LOGIN: "SET_LOGIN",
}

export const userConstants = {
    USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
    USER_REGISTER_FAILURE: "USER_REGISTER_FAILURE",
    UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE: "UPDATE_USER_FAILURE"
}

export const viewerConstants = {
    SET_VIEWER: "SET_VIEWER",
    VIEWER_REGISTER_REQUEST: "VIEWER_REGISTER_REQUEST",
    VIEWER_REGISTER_SUCCESS: "VIEWER_REGISTER_SUCCESS",
    VIEWER_REGISTER_FAILURE: "VIEWER_REGISTER_FAILURE",
    INIT_FAVORITES_REQUEST: "INIT_FAVORITES_REQUEST",
    INIT_FAVORITES_SUCCESS: "INIT_FAVORITES_SUCCESS",
    INIT_FAVORITES_FAILURE: "INIT_FAVORITES_FAILURE",
    ADD_TO_FAVORITES_REQUEST: "ADD_TO_FAVORITES_REQUEST",
    ADD_TO_FAVORITES_SUCCESS: "ADD_TO_FAVORITES_SUCCESS",
    ADD_TO_FAVORITES_FAILURE: "ADD_TO_FAVORITES_FAILURE",
    REMOVE_FROM_FAVORITES_REQUEST: "REMOVE_FROM_FAVORITES_REQUEST",
    REMOVE_FROM_FAVORITES_SUCCESS: "REMOVE_FROM_FAVORITES_SUCCESS",
    REMOVE_FROM_FAVORITES_FAILURE: "REMOVE_FROM_FAVORITES_FAILURE",
    INIT_FAVORITES_PRODUCTS_REQUEST: "INIT_FAVORITES_PRODUCTS_REQUEST",
    INIT_FAVORITES_PRODUCTS_SUCCESS: "INIT_FAVORITES_PRODUCTS_SUCCESS",
    INIT_FAVORITES_PRODUCTS_FAILURE: "INIT_FAVORITES_PRODUCTS_FAILURE",
    CLEAR_FAVORITE_MESSAGE: "CLEAR_FAVORITE_MESSAGE",
}

export const customerConstants = {
    GET_CUSTOMER_REQUEST: "GET_CUSTOMER_REQUEST",
    GET_CUSTOMER_SUCCESS: "GET_CUSTOMER_SUCCESS",
    GET_CUSTOMER_FAILURE: "GET_CUSTOMER_FAILURE",
    CUSTOMER_UPDATE_REQUEST: "CUSTOMER_UPDATE_REQUEST",
    CUSTOMER_UPDATE_SUCCESS: "CUSTOMER_UPDATE_SUCCESS",
    CUSTOMER_UPDATE_FAILURE: "CUSTOMER_UPDATE_FAILURE",
    SET_ACTIVE_ADDRESS_REQUEST: "SET_ACTIVE_ADDRESS_REQUEST",
    SET_ACTIVE_ADDRESS_SUCCESS: "SET_ACTIVE_ADDRESS_SUCCESS",
    SET_ACTIVE_ADDRESS_FAILURE: "SET_ACTIVE_ADDRESS_FAILURE",
    REMOVE_ADDRESS_REQUEST: "REMOVE_ADDRESS_REQUEST",
    REMOVE_ADDRESS_SUCCESS: "REMOVE_ADDRESS_SUCCESS",
    REMOVE_ADDRESS_FAILURE: "REMOVE_ADDRESS_FAILURE",
    ADD_NEW_ADDRESS_REQUEST: "ADD_NEW_ADDRESS_REQUEST",
    ADD_NEW_ADDRESS_SUCCESS: "ADD_NEW_ADDRESS_SUCCESS",
    ADD_NEW_ADDRESS_FAILURE: "ADD_NEW_ADDRESS_FAILURE",
    EDIT_ADDRESS_REQUEST: "EDIT_ADDRESS_REQUEST",
    EDIT_ADDRESS_SUCCESS: "EDIT_ADDRESS_SUCCESS",
    EDIT_ADDRESS_FAILURE: "EDIT_ADDRESS_FAILURE",
    INIT_ADDRESSES_REQUEST: "INIT_ADDRESSES_REQUEST",
    INIT_ADDRESSES_SUCCESS: "INIT_ADDRESSES_SUCCESS",
    INIT_ADDRESSES_FAILURE: "INIT_ADDRESSES_FAILURE",
    SET_CUSTOMER: "SET_CUSTOMER",
    SAVE_ADDRESSES_REQUEST: "SAVE_ADDRESSES_REQUEST",
    SAVE_ADDRESSES_SUCCESS: "SAVE_ADDRESSES_SUCCESS",
    SAVE_ADDRESSES_FAILURE: "SAVE_ADDRESSES_FAILURE",
}

export const checkoutConstants = {
    CHECKOUT_REQUEST: "CHECKOUT_REQUEST",
    CHECKOUT_SUCCESS: "CHECKOUT_SUCCESS",
    CHECKOUT_FAILURE: "CHECKOUT_FAILURE",
    CHANGE_BILLING_INPUT_REQUEST: "CHANGE_BILLING_INPUT_REQUEST",
    CHANGE_BILLING_INPUT_SUCCESS: "CHANGE_BILLING_INPUT_SUCCESS",
    CHANGE_BILLING_INPUT_FAILURE: "CHANGE_BILLING_INPUT_FAILURE",
    CHANGE_INPUT_REQUEST: "CHANGE_INPUT_REQUEST",
    CHANGE_INPUT_SUCCESS: "CHANGE_INPUT_SUCCESS",
    CHANGE_INPUT_FAILURE: "CHANGE_INPUT_FAILURE",
    CHECKOUT_UPDATE_BILLING: "CHECKOUT_UPDATE_BILLING"
}

export const categoryConstants = {
    SEARCH_CATEGORY_REQUEST: "SEARCH_CATEGORY_REQUEST",
    SEARCH_CATEGORY_SUCCESS: "SEARCH_CATEGORY_SUCCESS",
    SEARCH_CATEGORY_FAILURE: "SEARCH_CATEGORY_FAILURE",
    SEARCH_ALL_CATEGORIES: "SEARCH_ALL_CATEGORIES",
    SEARCH_CATEGORY_FILTER: "SEARCH_CATEGORY_FILTER",
    CATEGORY_FILTERS_BY_SLUGS: "CATEGORY_FILTERS_BY_SLUGS",
    CATEGORIES_INIT: "CATEGORIES_INIT",
}

export const productConstants = {
    PRODUCTS_NEW_DATA: "PRODUCTS_NEW_DATA",
    GET_ALL_PRODUCTS_REQUEST: "GET_ALL_PRODUCTS_REQUEST",
    GET_ALL_PRODUCTS_SUCCESS: "GET_ALL_PRODUCTS_SUCCESS",
    GET_ALL_PRODUCTS_FAILURE: "GET_ALL_PRODUCTS_FAILURE",
    GET_ADD_PRODUCTS_REQUEST: "GET_ADD_PRODUCTS_REQUEST",
    GET_ADD_PRODUCTS_SUCCESS: "GET_ADD_PRODUCTS_SUCCESS",
    GET_ADD_PRODUCTS_FAILURE: "GET_ADD_PRODUCTS_FAILURE",
    GET_ALL_PRODUCTS_BY_SLUG_REQUEST: "GET_ALL_PRODUCTS_BY_SLUG_REQUEST",
    GET_ALL_PRODUCTS_BY_SLUG_SUCCESS: "GET_ALL_PRODUCTS_BY_SLUG_SUCCESS",
    GET_ALL_PRODUCTS_BY_SLUG_FAILURE: "GET_ALL_PRODUCTS_BY_SLUG_FAILURE",
    PRODUCT_SEARCH_BY_TEXT: "PRODUCT_SEARCH_BY_TEXT",
    PRODUCT_SEARCH_BY_CATEGORY_IN: "PRODUCT_SEARCH_BY_CATEGORY_IN",
    SEARCH_PRODUCTS_REQUEST: "SEARCH_PRODUCTS_REQUEST",
    SEARCH_PRODUCTS_SUCCESS: "SEARCH_PRODUCTS_SUCCESS",
    SEARCH_PRODUCTS_FAILURE: "SEARCH_PRODUCTS_FAILURE",
    PRODUCT_SEARCH_BY_CATEGORY_SLUG: "PRODUCT_SEARCH_BY_CATEGORY_SLUG",
    PRODUCTS_INIT: "PRODUCTS_INIT",
}

export const searchConstants = {
    SEARCH_REQUEST: "SEARCH_REQUEST",
    SEARCH_SUCCESS: "SEARCH_SUCCESS",
    SEARCH_FAILURE: "SEARCH_FAILURE",
    SEARCH_BOX_CLEAR: "SEARCH_BOX_CLEAR",
}

export const cartConstants = {
    CART_REQUEST: "CART_REQUEST",
    CART_SUCCESS: "CART_SUCCESS",
    CART_FAILURE: "CART_FAILURE",
    APPLY_COUPON_REQUEST: "APPLY_COUPON_REQUEST",
    APPLY_COUPON_SUCCESS: "APPLY_COUPON_SUCCESS",
    APPLY_COUPON_FAILURE: "APPLY_COUPON_FAILURE",
    ADD_TO_CART_REQUEST: "ADD_TO_CART_REQUEST",
    ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
    ADD_TO_CART_FAILURE: "ADD_TO_CART_FAILURE",
    UPDATE_CART_REQUEST: "UPDATE_CART_REQUEST",
    UPDATE_CART_SUCCESS: "UPDATE_CART_SUCCESS",
    UPDATE_CART_FAILURE: "UPDATE_CART_FAILURE",
    CLEAR_CART_REQUEST: "CLEAR_CART_REQUEST",
    CLEAR_CART_SUCCESS: "CLEAR_CART_SUCCESS",
    CLEAR_CART_FAILURE: "CLEAR_CART_FAILURE",
    UPDATE_SHIPPING_METHOD_REQUEST: "UPDATE_SHIPPING_METHOD_REQUEST",
    UPDATE_SHIPPING_METHOD_SUCCESS: "UPDATE_SHIPPING_METHOD_SUCCESS",
    UPDATE_SHIPPING_METHOD_FAILURE: "UPDATE_SHIPPING_METHOD_FAILURE",
    EMPTY_SHIPPING_METHODS: "EMPTY_SHIPPING_METHODS",
    UPDATE_SHIPPING_COURIER_METHOD_REQUEST: "UPDATE_SHIPPING_COURIER_METHOD_REQUEST",
    SHIPPING_METHOD_REQUEST: "SHIPPING_METHOD_REQUEST",
}

export const orderConstants = {
    GET_ORDERS_REQUEST: "GET_ORDERS_REQUEST",
    GET_ORDERS_SUCCESS: "GET_ORDERS_SUCCESS",
    GET_ORDERS_FAILURE: "GET_ORDERS_FAILURE",
    SET_ORDER: "SET_ORDER",
}