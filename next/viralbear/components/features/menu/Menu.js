import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { 
    Grid, 
    AppBar, 
    Toolbar,  
    CssBaseline,
    useTheme,
    useMediaQuery
} from '@material-ui/core';

import { useStyles } from './Menu.Styles.js';
import DrawerComponent from "./drawer/Drawer.js";

const Menu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <Grid item xs={12} className={classNames(classes.flex, classes.spacedEvenly)}>
                        <Link href="/" className={classes.link}>
                            HOME
                        </Link>
                        <Link href="/aboutUs" className={classes.link}>
                            ABOUT US
                        </Link>
                        <Link href="/contactUs" className={classes.link}>
                            CONTACT US
                        </Link>
                        <Link href="/submitVideo" className={classes.link}>
                            SUBMIT A VIDEO
                        </Link>
                    </Grid>
                )}
            </Toolbar>
        </AppBar>
    )
};

export default Menu
