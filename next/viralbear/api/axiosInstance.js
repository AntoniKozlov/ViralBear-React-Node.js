import axios from 'axios';
import {resetNotification, setNotification} from '../../../frontend/src/redux/actions/settingNotifications';
import {store} from '../../../frontend/src/redux/index';

const axiosInstance = axios.create({});

// response parse
axiosInstance.interceptors.response.use((response) => {
    if ((response.data.file && response.config.url === "/submitVideo/upload") ||
        response.config.url !== "/submitVideo/upload") {
        store.dispatch(setNotification({
            message: response.data.msg,
            status: 'success'
        }));
        store.dispatch(resetNotification());
    }
    return response;
}, (error) => {
    console.warn('Error status', error.response.status);
    if (error.response) {
        console.log(error.response);
        if ((error.response.data.file && error.response.config.url === "/submitVideo/upload") ||
            error.response.config.url !== "/submitVideo/upload") {
            store.dispatch(setNotification({
                message: error.response.data.msg,
                status: 'error'
            }));
            store.dispatch(resetNotification());
        }
        return error.response
    } else {
        return Promise.reject(error);
    }
});
export default axiosInstance;
