import axios from 'axios';
import {
    TAG_LIST_REQUEST,
    TAG_LIST_SUCCESS,
    TAG_LIST_FAIL,
    TAGS_LIST_REQUEST,
    TAGS_LIST_SUCCESS,
    TAGS_LIST_FAIL,
} from './types';

import { TAGS_SERVER } from '../components/utils/misc';

export const getTags = () => async (dispatch) => {
    try {
        dispatch({ type: TAG_LIST_REQUEST })

        const { data } = await axios.get(`${TAGS_SERVER}`)

        dispatch({
            type: TAG_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TAG_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}

export const getAllTags = () => async (dispatch) => {
    try {
        dispatch({ type: TAGS_LIST_REQUEST })

        const { data } = await axios.get(`${TAGS_SERVER}/t`)

        dispatch({
            type: TAGS_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TAGS_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}