import React, {useEffect} from 'react';
import {Grid, TextField, Typography} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ReCAPTCHA from 'react-google-recaptcha';
import publicIP from 'react-native-public-ip';
import {connect} from 'react-redux'
import {withSnackbar} from 'notistack';
import PropTypes from 'prop-types';

import {validateEmail} from '../utils/validations';
import {useStyles} from './Contact.Styles.js';
import {sendContacts} from '../redux/actions/sendingContacts';


const Contact = (props) => {
    const {status, message, enqueueSnackbar} = props;

    const recaptchaRef = React.useRef();
    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [messageField, setMessageField] = React.useState('');
    const [subject, setSubject] = React.useState('');

    useEffect(() => {
        if (message != null && status != null)
            enqueueSnackbar(message, {
                variant: status
            });
    }, [status, message, enqueueSnackbar]);

    const onSubmit = () => {
        publicIP()
            .then(ip => {
                if (name !== '' && subject !== '' && messageField !== '' && validateEmail(email)) {
                    props.postContacts({
                        mainInfo: {
                            name: name,
                            email: email,
                            subject: subject,
                            message: messageField,
                            ip: ip
                        }
                    });

                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessageField('');
                } else {
                    props.enqueueSnackbar('Data was entered incorrectly!', {
                        variant: 'error'
                    });
                }
            })
    };
    return (
        <Grid container className={classes.paddingTopBottom}>
            <Grid item xs={false} lg={3}/>
            <Grid container item xs={12} lg={6} spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2">
                        Contact Us
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Your name"
                        variant="outlined"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type="email"
                        label="Your email"
                        variant="outlined"
                        value={email}
                        error={!validateEmail(email)}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Subject</InputLabel>
                        <Select
                            value={subject}
                            onChange={event => setSubject(event.target.value)}
                            label="Subject"
                        >
                            <MenuItem value="">
                                <em>Subject</em>
                            </MenuItem>
                            <MenuItem value="License a video & questions">License a video & questions</MenuItem>
                            <MenuItem value="Business inquiries">Business inquiries</MenuItem>
                            <MenuItem value="Video owner questions">Video owner questions</MenuItem>
                            <MenuItem value="Press inquiries">Press inquiries</MenuItem>
                            <MenuItem value="General information and other">General information and other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6LdX59kZAAAAABS16HzfeFXr9KyKR2oq7FW4NHxC"
                />

                <Grid item xs={12}>
                    <TextField
                        required
                        label="Your message"
                        fullWidth
                        multiline
                        rows={4}
                        value={messageField}
                        variant="outlined"
                        onChange={event => setMessageField(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary" endIcon={<Icon>send</Icon>}
                            onClick={() => onSubmit()}>
                        SEND MESSAGE
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={false} lg={3}/>
        </Grid>
    );
};

Contact.propTypes = {
    message: PropTypes.string,
    status: PropTypes.string
};

const mapStateToProps = function (state) {
    return {
        error: state.contactsSending.error,
        message: state.notificationsSetting.message,
        status: state.notificationsSetting.status
    };
};

const mapDispatchToProps = {
    postContacts: sendContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Contact));
