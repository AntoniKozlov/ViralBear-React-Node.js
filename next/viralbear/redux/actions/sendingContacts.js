import {FAILED_SENDING_CONTACTS, START_SENDING_CONTACTS, SUCCESSFUL_SENDING_CONTACTS} from '../../consts/actionTypes';
import api from '../../api/axiosInstance';

export const sendContacts = ({mainInfo}) => dispatch => {
    dispatch(startSendingContacts());
    api.post('/contactUs/addContact', mainInfo)
        .then(res => {
            if (res.status === 200) {
                dispatch(successfulSendingContacts());
            } else {
                dispatch(failedSendingContacts(res.data.error));
            }
        });
};

/*     ACTIONS     */

export const startSendingContacts = () => ({
    type: START_SENDING_CONTACTS
})

export const successfulSendingContacts = () => ({
    type: SUCCESSFUL_SENDING_CONTACTS
})

export const failedSendingContacts = payload => ({
    type: FAILED_SENDING_CONTACTS,
    payload
})

