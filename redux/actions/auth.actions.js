import React, { useState } from "react";
import { authConstants, customerConstants, userConstants, viewerConstants } from "./constants";
import LOGIN_USER from "../../gql/mutations/login-user";
import client from "../../components/ApolloClient";
import { v4 } from "uuid";
import REFRESH_TOKEN from "../../gql/mutations/refresh-token";
import { getViewer } from "./viewer.actions";
import { getCustomer, initAddressesAndFavorites } from "./customer.actions";
import { getCart } from "./cart.actions";
import jscookie from 'js-cookie'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {initializeApollo} from "../../components/Apollo";

export const loginUser = (loginForm = {}) => {
    return async dispatch => {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        })

        try {
            const result = await client.mutate({
                mutation: LOGIN_USER,
                variables: {
                    input: {
                        clientMutationId: v4(),
                        ...loginForm
                    },
                    keysIn: [
                        "number-address",
                        "address-"
                    ],
                    multiple: true
                },
                fetchPolicy: 'no-cache'
            })

            const { user, authToken, customer } = result.data.login

            setCookie(null, 'wp-next-token', authToken);
            setCookie(null, 'user', JSON.stringify(user));

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token: authToken,
                    user: user
                }
            })
            dispatch({
                type: viewerConstants.VIEWER_REGISTER_SUCCESS,
                payload: {
                    viewer: user
                }
            })

            // set address billing
            if (user.description) {
                dispatch(initAddressesAndFavorites(user.description))
            }


            dispatch({
                type: customerConstants.GET_CUSTOMER_SUCCESS,
                payload: {
                    customer
                }
            })

            dispatch(getCart())
        } catch (error) {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: error.message
                }
            })
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        dispatch({ type: authConstants.REFRESH_TOKEN_REQUEST });

        const apolloClient = initializeApollo()
        const cookies = parseCookies()
        const token = cookies['wp-next-token'];

        if (typeof token === undefined) {
            destroyCookie(null, 'wp-next-token')
        }


        try {
            if (token) {
                const result = await apolloClient.mutate({
                    mutation: REFRESH_TOKEN,
                    variables: {
                        input: {
                            clientMutationId: v4(),
                            jwtRefreshToken: token
                        }
                    },
                    fetchPolicy: 'no-cache'
                })

                

                // const qry = await client.query({
                //     query: GET_VIEWER,
                // })

                const { authToken } = result.data.refreshJwtAuthToken
                // const { viewer } = qry.data
                setCookie(null, 'wp-next-token', authToken)
                // console.log('wp-next-token', authToken)

                dispatch({
                    type: authConstants.REFRESH_TOKEN_SUCCESS,
                    payload: {
                        token: authToken
                    }
                });

                dispatch(getViewer())
                dispatch(getCustomer())
                // dispatch({
                //     type: viewerConstants.VIEWER_REGISTER_SUCCESS,
                //     payload: {
                //         viewer
                //     }
                // });
                return true
            } else {
                throw "User is Guest"
            }
        } catch (error) {
            localStorage.removeItem('wp-next-token');
            dispatch({
                type: authConstants.REFRESH_TOKEN_FAILURE,
                payload: {
                    error: error.message
                }
            });
            return false
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        destroyCookie(null, 'wp-next-token')
        dispatch({
            type: authConstants.LOGOUT_SUCCESS
        });
    }
}