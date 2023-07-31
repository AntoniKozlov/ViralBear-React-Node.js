import React from 'react';
import classNames from 'classnames';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Grid, Typography} from '@material-ui/core';

import PartnersList from '../components/partners-list/PartnersList';
import LicenseBlock from '../components/license-block/LicenseBlock';
import AdvantagesBlock from '../components/advantages-block/AdvantagesBlock';
import {useStyles} from './Home.Styles';

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container className={classNames(classes.videoBackground, classes.flex, classes.centeredContent)}>
                    <Typography
                        variant="h4"
                        className={classes.whiteText}
                    >
                        Do you have a video that you would like to sell?
                    </Typography>
                    <Link
                        className={classes.paddedLeft}
                        to="/submitVideo"
                    >
                        <Button variant="contained" color="secondary">
                            <Typography variant="h4">SUBMIT A VIDEO!</Typography>
                        </Button>
                    </Link>
                </Container>
            </Grid>
            <Grid item xs={false} lg={4}/>
            <Grid container item xs={12} className={classNames(classes.flex, classes.centeredContent)}>
                <PartnersList/>
            </Grid>

            <Grid container item xs={12} lg={12}>
                <LicenseBlock/>
            </Grid>

            <Grid container item xs={12} lg={12}>
                <AdvantagesBlock/>
            </Grid>
        </Grid>
    );
}

export default withRouter(Home)
