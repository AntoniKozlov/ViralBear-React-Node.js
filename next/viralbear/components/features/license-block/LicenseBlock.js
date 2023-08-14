import React from 'react';
import classNames from 'classnames';
import {Button, Grid, Typography} from '@material-ui/core';
import Link from 'next/link'

import {useStyles} from './LicenseBlock.Styles';


const LicenseBlock = () => {
    const classes = useStyles();

    return (
        <Grid container item className={classNames(classes.marginTop)}>
            <Grid container item xs={10} className={classNames(classes.marginAuto, classes.centeredContent)}>
                <Grid xs={3} item className={classes.marginAuto}>
                    <img src="/assets/images/welcome.jpg" className={classes.img} alt=""/>
                </Grid>
                <Grid container xs={7} item className={classNames(classes.welcomeLicenseText, classes.marginAuto)}
                      direction="column">
                    <Grid item>
                        <Typography variant="h5" className={classes.textUnderline}>WELCOME</Typography>
                    </Grid>
                    <Grid item className={classes.paddingTextWelcome}>
                        <Typography variant="subtitle1">Launchpad Entertainment is a leader
                            in user-generated content, connecting creators and distributors around the world. Our
                            video library hosts some of the most viral clips copied and shared on the internet. We
                            are dedicated
                            to rewarding content creators while supplying brands and entertainment companies with
                            the most amazing
                            and unique videos. <Link className={classes.link} href="/aboutUs"> Learn more about what
                                we do.</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item xs={10} className={classNames(classes.marginAuto, classes.centeredContent)}>
                <Grid container xs={5} item className={classNames(classes.welcomeLicenseText, classes.marginAuto)}
                      direction="column">
                    <Grid item>
                        <Typography variant="h5" className={classes.textUnderline}>LICENSING</Typography>
                    </Grid>
                    <Grid item className={classes.paddingTextWelcome}>
                        <Typography variant="subtitle1">Tailored to fit your needs, we provide customized research to the
                            client. We have over 20,000 videos in our library and our team brings in fresh, viral
                            and trending clips every day. We make licensing easy and effective.</Typography>
                    </Grid>
                    <Grid>
                        <Link href="/contactUs" className={classes.textDecoration}>
                            <Button variant="contained" color="primary">
                                <Typography variant="h5">CONTACT US</Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid xs={5} item className={classes.marginAuto}>
                    <video
                        controls
                        className={classes.video}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LicenseBlock;
