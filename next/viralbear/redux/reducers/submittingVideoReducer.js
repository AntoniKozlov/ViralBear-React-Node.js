import {
    FAILED_SUBMITTING,
    FINISH_PROGRESS,
    START_PROGRESS,
    START_SUBMITTING,
    SUCCESSFUL_SUBMITTING,
    SET_UPLOADING_PROGRESS
} from '../../consts/actionTypes';

const videoSubmitting = (state = {}, action) => {
    switch (action.type) {
        case START_SUBMITTING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SUCCESSFUL_SUBMITTING:
            return {
                ...state,
                loading: false,
                error: null
            }
        case FAILED_SUBMITTING:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case START_PROGRESS:
            return {
                ...state,
                percent: 0
            }
        case SET_UPLOADING_PROGRESS:
            return {
                ...state,
                percent: action.payload
            }
        case FINISH_PROGRESS:
            return {
                ...state,
                percent: 0
            }
        default:
            return state
    }
}

export default {
    videoSubmitting
}
