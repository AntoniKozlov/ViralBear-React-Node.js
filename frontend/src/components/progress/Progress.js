import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import {Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import {useStyles} from './Progress.Styles';

export default function CircularProgressWithLabel(props) {
    const classes = useStyles();

    return (
        <Box position="relative" display="inline-flex" className={classes.centeredBox}>
            <CircularProgress variant="static" {...props} style={{height: '400px', width: '400px'}}/>
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary"
                            className={classes.fontSizeProgress}>{`${Math.round(props.value,)}%`}</Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};
