import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';

import { useStyles } from './Menu.Styles.js';

const Menu = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Grid container>
                <Grid item xs={false} lg={3} />
                <Grid item xs={12} lg={6}>
                    <Toolbar className={classNames(classes.flex, classes.spacedBetween)}>
                        <Typography variant="h6">
                            <Link className={classes.link} to="/">HOME</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={classes.link} to="/aboutUs">ABOUT US</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={classes.link} to="/contactUs">CONTACT US</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={classes.link} to="/submitVideo">SUBMIT A VIDEO</Link>
                        </Typography>
                    </Toolbar>
                </Grid>
                <Grid item xs={false} lg={3} />
            </Grid>
        </AppBar>
    )
};

export default withRouter(Menu)
