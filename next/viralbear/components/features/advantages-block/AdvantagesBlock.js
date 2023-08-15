import React from 'react';
import classNames from 'classnames';
import {Grid, Typography} from '@material-ui/core';

import {useStyles} from './AdvantagesBlock.Styles';

const AdvantagesBlock = () => {
    const classes = useStyles();

    return (
        <Grid container item className={classNames(classes.flex, classes.advantages)} xs={12}>
            <Grid container item className={classNames(classes.flex, classes.advantagesInner, classes.whiteText)} xs={12}>
                <Grid item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/trustworthy.png" className={classes.img} alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={classes.borderTopBottom}>TRUSTWORTHY</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Our videos are fully verified, sourced and
                            available for immediate commercial use.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/universal.png" className={classes.img} alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={classes.borderTopBottom}>UNIVERSAL</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Powered by a global team of researchers, our video library
                            aggregates content from all over the world.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/trending.png" className={classes.img} alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={classes.borderTopBottom}>TRENDING</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Our multi-platform brands have millions of followers and
                            our content has a proven track record of going viral.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/efficiency.png" className={classes.img} alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={classes.borderTopBottom}>EFFICIENCY</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">We provide individual support so clients can find the
                            perfect video for their creative briefing.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AdvantagesBlock;
