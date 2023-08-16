import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import {AppBar, Grid, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';

import {useStyles} from './Footer.Styles.js';

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Grid container direction="column">
                <Grid container justifyContent='center' item xs={10} className={classNames(classes.marginAuto, classes.topBlock, classes.footerDirection)}>
                    <Grid xs={10} md={6} lg={6} item container direction="column"  className={classNames(classes.minWidth, classes.floatLeft)}>
                        <Grid item className={classNames(classes.flex, classes.footerTitleCenter)}>
                            <Typography variant="h5" className={classes.underLineTwo}>CONTACT US</Typography>
                        </Grid>
                        <Grid item container direction="column" className={classes.paddingTopBottom}>
                            <Grid item className={classNames(classes.flex, classes.paddingTopBottom)}>
                                <LocationOnIcon className={classes.paddingRightLeft}/>
                                <Typography variant="subtitle1">8939 S. Sepulveda Blvd., Suite 508 Los Angeles,
                                    California 90045
                                </Typography>
                            </Grid>
                            <Grid item className={classNames(classes.flex, classes.paddingTopBottom)}>
                                <PhoneIcon className={classes.paddingRightLeft}/>
                                <Typography variant="subtitle1">www.viralbear.com</Typography>
                            </Grid>
                            <Grid item className={classNames(classes.flex, classes.paddingTopBottom)}>
                                <MailIcon className={classes.paddingRightLeft}/>
                                <Typography variant="subtitle1">Licensing@viralbear.ru</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={10} md={6} lg={6} item container direction="column" className={classNames(classes.minWidth, classes.floatRight)}>
                        <Grid item className={classNames(classes.flex, classes.footerTitleCenter)} >
                            <Typography variant="h5" className={classes.underLineTwo}>OTHER ITEMS</Typography>
                        </Grid>
                        <Grid item container
                              className={classNames(classes.paddingTopBottom, classes.flex, classes.spaceBetween, classes.otherItems)}>
                            <Grid item className={classNames(classes.padding, classes.flex, classes.centeredContent)}>
                                <Link className={classes.link} href="/">
                                    <Typography variant="subtitle1" className={classes.underLineOne}>FAQ</Typography>
                                </Link>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.divider}/>
                            <Grid item className={classNames(classes.padding, classes.flex, classes.centeredContent)}>
                                <Link className={classes.link} href="/privatePolicy">
                                    <Typography variant="subtitle1" className={classes.underLineOne}>
                                        Privacy Policy</Typography>
                                </Link>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.divider}/>
                            <Grid item className={classNames(classes.padding, classes.flex, classes.centeredContent)}>
                                <Link className={classes.link} href="/termsOfUse">
                                    <Typography variant="subtitle1" className={classes.underLineOne}>
                                        Terms of Use</Typography>
                                </Link>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.divider}/>
                            <Grid item className={classNames(classes.padding, classes.flex, classes.centeredContent)}>
                                <Link className={classes.link} href="/contactUs">
                                    <Typography variant="subtitle1" className={classes.underLineOne}>
                                        Contact Us</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction="column" item xs={10} className={classNames(classes.marginAuto, classes.paddingTopBottom, classes.alignContentCenter)}>

                    <Grid container xs={10} item className={classNames(classes.alignText, classes.flex)}>
                        <Typography variant="subtitle1">© Copyright Launchpad Entertainment, LLC. 2020. All rights
                            reserved.</Typography>
                    </Grid>
                    <Grid container direction='row' xs={10} item className={classNames(classes.centeredContent, classes.flex)}>
                        <IconButton href="https://facebook.com">
                            <FacebookIcon fontSize="large"/>
                        </IconButton>
                        <IconButton href="https://instagram.com">
                            <InstagramIcon fontSize="large"/>
                        </IconButton>
                        <IconButton href="https://linkedin.com">
                            <LinkedInIcon fontSize="large"/>
                        </IconButton>
                        <IconButton href="https://twitter.com">
                            <TwitterIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    )
};

export default Footer