import React from 'react';
import classNames from 'classnames';
import Link from 'next';
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
                            <Link className={classes.link} href="/">HOME</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={classes.link} href="/aboutUs">ABOUT US</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={classes.link} href="/contactUs">CONTACT US</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={classes.link} href="/submitVideo">SUBMIT A VIDEO</Link>
                        </Typography>
                    </Toolbar>
                </Grid>
                <Grid item xs={false} lg={3} />
            </Grid>
        </AppBar>
    )
};

export default Menu
