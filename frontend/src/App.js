import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SubmitVideoPage from './pages/SubmitVideoPage';
import PrivatePolicy from './pages/PrivatePolicy';
import TermsOfUse from './pages/TermsOfUse';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

import './App.css';
import './index.css';

const App = () => (
    <Grid container>
        <Grid item xs={12}>
            <Menu />
        </Grid>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutUs" component={About} />
            <Route exact path="/contactUs" component={Contact} />
            <Route exact path="/submitVideo" component={SubmitVideoPage} />
            <Route exact path="/privatePolicy" component={PrivatePolicy} />
            <Route exact path="/termsOfUse" component={TermsOfUse} />
            <Redirect from="" to="/" />
        </Switch>
        <Grid item xs={12}>
            <Footer />
        </Grid>
    </Grid>
);

export default withRouter(App)
