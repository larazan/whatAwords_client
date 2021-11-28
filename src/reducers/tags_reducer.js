import {
    TAG_LIST_REQUEST,
    TAG_LIST_SUCCESS,
    TAG_LIST_FAIL,
    TAGS_LIST_REQUEST,
    TAGS_LIST_SUCCESS,
    TAGS_LIST_FAIL,
} from '../actions/types'

export const tagsListReducer = (state = { tags: [] }, action) => {
    switch (action.type) {
        case TAGS_LIST_REQUEST:
            return { loading: true, tags: [] }
        case TAGS_LIST_SUCCESS:
            return { loading: false, tags: action.payload.tags }    
        case TAGS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const tagListReducer = (state = { tags: [] }, action) => {
    switch (action.type) {
        case TAG_LIST_REQUEST:
            return { loading: true, tags: [] }
        case TAG_LIST_SUCCESS:
            return { loading: false, tags: action.payload.tags }    
        case TAG_LIST_FAIL:
            return { loading: false, error: action.payload }    
        default:
            return state;
    }
}

// export default function(state = {}, action) {
//     switch (action.type) {
//         case GET_TAGS:
//             return { ...state, tags: action.payload }
//         case GET_ALL_TAGS:
//             return { ...state, tags: action.payload }
//         default:
//             return state;
//     }
// } 