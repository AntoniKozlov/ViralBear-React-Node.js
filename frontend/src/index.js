import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {SnackbarProvider} from 'notistack';

import {store} from './redux/index';
import './index.css';
import App from './App';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';

const storeApp = store;

ReactDOM.render(
    <SnackbarProvider maxSnack={3} anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}>
        <Provider store={storeApp}>
            <Router>
                <ScrollToTop/>
                <App/>
            </Router>
        </Provider>
    </SnackbarProvider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
