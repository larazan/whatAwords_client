import axios from 'axios';
import {
    LIKE_LIST_REQUEST,
    LIKE_LIST_SUCCESS,
    LIKE_LIST_FAIL,
    LIKE_CREATE_REQUEST,
    LIKE_CREATE_SUCCESS,
    LIKE_CREATE_FAIL,
    LIKE_CREATE_RESET,
    DISLIKE_LIST_REQUEST,
    DISLIKE_LIST_SUCCESS,
    DISLIKE_LIST_FAIL,
} from './types';

import { LIKE_SERVER } from '../components/utils/misc';

export const getLike = (id) => async (dispatch) => {
    try {
        dispatch({
            type: LIKE_LIST_REQUEST
        })

        const { data } = await axios.get(`${LIKE_SERVER}`, {id})
        
        dispatch ({
            type: LIKE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LIKE_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
    }
}

export const like = (id) => async (dispatch) => {
    try {
        dispatch({
            type: LIKE_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
          } = getState()
      
        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const userId = userInfo.id

        const { data } = await axios.get(`${LIKE_SERVER}/${id}/like`, {userId}, config)
        
        dispatch ({
            type: LIKE_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LIKE_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
    }
}

export const dislike = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DISLIKE_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
          } = getState()
      
        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
        }
        
        const userId = userInfo.id

        const { data } = await axios.get(`${LIKE_SERVER}/${id}/unlike`, {userId}, config)
        
        dispatch ({
            type: DISLIKE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DISLIKE_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
    }
}