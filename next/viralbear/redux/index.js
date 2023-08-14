import {applyMiddleware, compose, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import {reducers} from './reducers';

const composeEnhancers = typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    reducers,
    {
        videoSubmitting: {
            loading: false,
            percent: 0,
            error: null
        },
        contactsSending: {
            error: null
        },
        notificationsSetting: {
            message: null,
            status: null
        }
    },
    composeEnhancers(applyMiddleware(ReduxPromise, thunk))
);

export {store}
