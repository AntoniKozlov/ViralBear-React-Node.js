import {
    FAILED_SUBMITTING,
    FINISH_PROGRESS,
    SET_UPLOADING_PROGRESS,
    START_PROGRESS,
    START_SUBMITTING,
    SUCCESSFUL_SUBMITTING
} from '../../consts/actionTypes';
import api from '../../api/axiosInstance';
import {calculationPercent} from '../../utils/calculationPercent';

const submitVideo = ({formData, mainInfo, file}) => dispatch => {
    api.post('/submitVideo/storageSize', {file: !!file, fileSize: file.size})
        .then(res => {
            if (!res.data.closeAccess) {
                if (file) {
                    dispatch(startSubmittingVideo());
                    dispatch(startProgress());
                }

                api.post('/submitVideo/upload', formData, {
                    onUploadProgress: (ProgressEvent) => {
                        dispatch(setUploadingProgress(calculationPercent(ProgressEvent)));
                    }
                })
                    .then(res => {
                        mainInfo.video_upload = file ? res.data.file.filename : '';
                        api.post('/submitVideo/addVideo', mainInfo)
                            .then(res => {
                                dispatch(successfulSubmittingVideo());
                                dispatch(finishProgress());
                            })
                            .catch((error, res) => {
                                console.log(error);
                                dispatch(failedSubmittingVideo(res.data.msg));
                                dispatch(finishProgress());
                            });
                    })
                    .catch((error, res) => {
                        console.log(error);
                        dispatch(failedSubmittingVideo(res.data.msg));
                        dispatch(finishProgress());
                    })
            }
        }).catch(error => {
        console.log(error);
    });

};

export default submitVideo;
/*     ACTIONS     */

export const startSubmittingVideo = () => ({
    type: START_SUBMITTING
})

export const successfulSubmittingVideo = () => ({
    type: SUCCESSFUL_SUBMITTING
})

export const failedSubmittingVideo = payload => ({
    type: FAILED_SUBMITTING,
    payload
})

export const startProgress = () => ({
    type: START_PROGRESS
})

export const setUploadingProgress = payload => ({
    type: SET_UPLOADING_PROGRESS,
    payload
})

export const finishProgress = () => ({
    type: FINISH_PROGRESS
})
