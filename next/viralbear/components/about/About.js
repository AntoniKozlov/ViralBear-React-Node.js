import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from "classnames";
import {Container, Typography} from "@material-ui/core";

import {useStyles} from './About.module.styles';
import PARTNERS from '../../consts/partners';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classNames(classes.flex, classes.centeredContent, classes.imageBackground)}>
                <Grid item container direction="column" className={classes.whiteText}>
                    <Grid item container className={classes.padding}>
                        <Grid item container className={classNames(classes.whatIs, classes.padding)}
                              direction="column">
                            <Grid item>
                                <Typography variant="h4" className={classes.textUnderline}>WHAT IS
                                    VIRALBEAR?</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" className={classes.paddingTop}>We are all about
                                    user-generated content! Our team consists of veteran television producers and
                                    media professionals with over 15 years of experience in the business. We started
                                    the company with the intent to meet what we viewed as a lack of representation
                                    for independent content creators, especially to provide them with a fair
                                    opportunity
                                    to license their footage.</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classNames(classes.howWork, classes.padding)}
                              direction="column">
                            <Grid item>
                                <Typography variant="h4" className={classes.textUnderline}>HOW DOES IT
                                    WORK?</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" className={classes.paddingTop}>We’re powered by
                                    user-generated content. Our international team of researchers work around the
                                    clock to find the best videos on the web. Then, we clear the footage to be used
                                    by television shows, commercials, feature films, news organizations, and online
                                    publishers.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.brands} container direction="column">
                        <Grid item>
                            <Typography variant="h4" className={classes.textUnderline}>OUR BRANDS</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" className={classes.paddingTopBottom}>Our content is viral and
                                loved across the internet!</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container item xs={12} lg={12} justify="center">
                    {PARTNERS.map(partner =>
                        <Grid item xs={12} lg={4} className={classes.paddingBrands} key={partner.name}>
                            <Paper className={classNames(classes.padding, classes.paper)}>
                                <img src={partner.src} height={60} alt=""/>
                            </Paper>
                        </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default About
