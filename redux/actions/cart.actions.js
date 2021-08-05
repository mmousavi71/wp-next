import { cartConstants } from "./constants";
import ADD_TO_CART from "../../gql/mutations/add-to-cart";
import UPDATE_CART from "../../gql/mutations/update-cart";
import CLEAR_CART_MUTATION from "../../gql/mutations/clear-cart";
import GET_CART from "../../gql/queries/get-cart";
import client from "../../components/ApolloClient";
import APPLY_COUPON from "../../gql/mutations/apply-coupon";
import { v4 } from "uuid";
import UPDATE_SHIPPING_METHOD from "../../gql/mutations/update-shipping-method";
import {initializeApollo} from "../../components/Apollo";

export const getCart = () => {
    return async dispatch => {
        dispatch({
            type: cartConstants.CART_REQUEST
        });

        try {
            const apolloClient = initializeApollo()
            const result = await apolloClient.query({
                query: GET_CART,
                // fetchPolicy: 'no-cache'
            });

            const { cart } = result.data;

            dispatch({
                type: cartConstants.CART_SUCCESS,
                payload: {
                    cart
                }
            });
        } catch (error) {
            dispatch({
                type: cartConstants.CART_FAILURE,
                payload: {
                    error: error.message
                }
            });
        }
    }
}

export const addToCart = (addToCartInput) => {
    return async dispatch => {
        dispatch({
            type: cartConstants.ADD_TO_CART_REQUEST
        });

        try {
            const result = await client.mutate({
                mutation: ADD_TO_CART,
                variables: {
                    input: addToCartInput
                },
                fetchPolicy: 'no-cache'
            });

            const { addToCart } = result.data;

            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                payload: {
                    cart: addToCart.cart,
                }
            });
        } catch (error) {
            dispatch({
                type: cartConstants.ADD_TO_CART_FAILURE,
                payload: {
                    error: error.response.data.message
                }
            });
        }
    }
}


export const updateCart = (variables) => {
    return async dispatch => {
        dispatch({
            type: cartConstants.UPDATE_CART_REQUEST
        });

        try {
            const result = await client.mutate({
                mutation: UPDATE_CART,
                variables: variables,
                fetchPolicy: 'no-cache'
            });

            const { updateItemQuantities } = result.data;

            dispatch({
                type: cartConstants.UPDATE_CART_SUCCESS,
                payload: {
                    cart: updateItemQuantities.cart,
                }
            });
        } catch (error) {
            dispatch({
                type: cartConstants.UPDATE_CART_FAILURE,
                payload: {
                    error: error.response.data.message
                }
            });
        }
    }
}

export const clearCart = (variables) => {
    return async dispatch => {
        dispatch({
            type: cartConstants.CLEAR_CART_REQUEST
        });

        try {
            const result = await client.mutate({
                mutation: CLEAR_CART_MUTATION,
                variables: variables,
                fetchPolicy: 'no-cache'
            });

            const { removeItemsFromCart } = result.data;

            dispatch({
                type: cartConstants.CLEAR_CART_SUCCESS,
                payload: {
                    cart: removeItemsFromCart.cart,
                }
            });
        } catch (error) {
            dispatch({
                type: cartConstants.CLEAR_CART_FAILURE,
                payload: {
                    error: error.message
                }
            });
        }
    }
}

export const applyCoupon = (code) => {
    return async dispatch => {
        dispatch({
            type: cartConstants.APPLY_COUPON_REQUEST
        });

        try {
            const result = await client.mutate({
                mutation: APPLY_COUPON,
                variables: {
                    input: {
                        clientMutationId: v4(),
                        code
                    }
                },
                fetchPolicy: 'no-cache'
            });

            const { cart } = result.data.applyCoupon;

            dispatch({
                type: cartConstants.APPLY_COUPON_SUCCESS,
                payload: {
                    cart
                }
            });
        } catch (error) {
            dispatch({
                type: cartConstants.APPLY_COUPON_FAILURE,
                payload: {
                    error: error.message
                }
            });
        }
    }
}

export const updateShippingMethod = (input) => {
    return async dispatch => {
        dispatch({
            type: cartConstants.UPDATE_SHIPPING_METHOD_REQUEST
        });

        if (input.shippingMethods.length && input.shippingMethods.includes('WC_Courier_Method:4')) {
            dispatch({
                type: cartConstants.UPDATE_SHIPPING_COURIER_METHOD_REQUEST
            });
        }

        try {
            const result = await client.mutate({
                mutation: UPDATE_SHIPPING_METHOD,
                variables: {
                    input: {
                        clientMutationId: v4(),
                        ...input
                    }
                },
                fetchPolicy: 'no-cache'
            });

            const { cart } = result.data.updateShippingMethod;

            dispatch({
                type: cartConstants.UPDATE_SHIPPING_METHOD_SUCCESS,
                payload: {
                    cart
                }
            });
        } catch (error) {
            dispatch({
                type: cartConstants.UPDATE_SHIPPING_METHOD_FAILURE,
                payload: {
                    error: error.response.data.message
                }
            });
        }
    }
}