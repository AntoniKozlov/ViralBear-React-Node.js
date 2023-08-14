import React, {useEffect} from 'react';
import SwipeViews from 'react-swipeable-views';
import SignatureCanvas from 'react-signature-canvas';
import Link from 'next/link';
import {Button, Card, CardActions, CardContent, Grid, Tab, Tabs, TextField, Typography} from '@material-ui/core';
import {FileCopy, Link as LinkIcon} from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import ReCAPTCHA from 'react-google-recaptcha';
import classNames from 'classnames';
import publicIP from 'react-native-public-ip';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {withSnackbar} from 'notistack';

import {submitVideo} from '../../redux/actions/submittingVideo';
import {validateEmail, validateLink} from '../../utils/validations';
import {useStyles} from './SubmitVideo.module.styles';
import TabPanel from '../features/tab-panel/TabPanel';
import CircularProgressWithLabel from '../features/progress/Progress';


const SubmitVideo = (props) => {
    const {status, message, enqueueSnackbar} = props;

    const signaturePad = React.useRef();
    const recaptchaRef = React.useRef();
    const el = React.useRef();
    const classes = useStyles();

    const [file, setFile] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tab, setTab] = React.useState(0);
    const [link, setLink] = React.useState('');
    const [signature, setSignature] = React.useState('');
    const [age, setAge] = React.useState(false);
    const [accept, setAccept] = React.useState(false);
    const [agreeRecord, setAgreeRecord] = React.useState(true);
    const [operator, setOperator] = React.useState('');

    useEffect(() => {
        if (message != null && status != null)
            enqueueSnackbar(message, {
                variant: status
            });
    }, [status, message, enqueueSnackbar]);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const onSubmit = () =>
        publicIP()
            .then(ip => {
                const formData = new FormData();
                formData.append('file', file);

                if (name !== '' && lastName !== '' && signature !== '' && validateEmail(email) &&
                    !((!file && !link) || (file && link) || !validateLink(link)) && ((!agreeRecord && operator !== '')
                        || agreeRecord) && age && accept) {

                    props.postVideo({
                        formData, mainInfo: {
                            last_name: lastName,
                            video_link: link,
                            video_owner: agreeRecord ? "Yes" : operator,
                            name,
                            signature,
                            ip,
                            email
                        }, file
                    });

                    if (!file) signaturePad.current.clear();
                    setName('');
                    setLastName('');
                    setEmail('');
                    setLink('');
                    setOperator('');
                    setSignature('');
                    setFile('');
                    setAge(false);
                    setAccept(false);
                    setAgreeRecord(true);
                } else {
                    props.enqueueSnackbar('Data was entered incorrectly!', {
                        variant: 'error'
                    });
                }
            });

    return (
        <Grid container className={classes.paddingTopBottom}>
            {props.loading && props.percent !== 100 ?
                <Grid className={classes.sizeGridProgress}><CircularProgressWithLabel
                    value={props.percent}/></Grid> : <>
                    <Grid item xs={false} lg={3}/>
                    <Grid container item xs={12} lg={6} spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                Submit a video
                            </Typography>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                required
                                fullWidth
                                label="Last name"
                                variant="outlined"
                                value={lastName}
                                onChange={event => setLastName(event.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type="email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                error={!validateEmail(email)}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Tabs
                                value={tab}
                                onChange={(event, newValue) => setTab(newValue)}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="File" icon={<FileCopy/>}/>
                                <Tab label="Link" icon={<LinkIcon/>}/>
                            </Tabs>
                        </Grid>

                        <Grid item xs={12}>
                            <SwipeViews
                                index={tab}
                                onChangeIndex={setTab}
                            >
                                <TabPanel value={tab} index={0}>
                                    <input
                                        accept="video/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        type="file"
                                        onChange={handleChange}
                                        ref={el}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <TextField
                                            fullWidth
                                            label="Your video"
                                            variant="outlined"
                                            value={file ? file.name : "No file selected"}
                                            disabled={true}
                                            className={classes.nameUpload}
                                        />
                                        <Button variant="contained" color="primary" fullWidth component="span">
                                            Upload
                                        </Button>
                                    </label>
                                </TabPanel>
                                <TabPanel value={tab} index={1}>
                                    <TextField
                                        fullWidth
                                        label="Your Link/URL"
                                        variant="outlined"
                                        error={!validateLink(link)}
                                        value={link}
                                        onChange={event => setLink(event.target.value)}
                                    />
                                </TabPanel>
                            </SwipeViews>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                className={classes.marginAuto}
                                control={
                                    <Grid component="label" container alignItems="center" spacing={1}>
                                        <Grid item>No</Grid>
                                        <Grid item>
                                            <Switch
                                                onChange={event => setAgreeRecord(event.target.checked)}
                                                checked={agreeRecord}
                                                name="switchRecord"
                                                color="primary"
                                            />
                                        </Grid>
                                        <Grid item>Yes</Grid>
                                    </Grid>
                                }
                                label="Did you record this video?"
                                labelPlacement="top"
                            />
                        </Grid>

                        {!agreeRecord ? <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Who recorded this video?"
                                variant="outlined"
                                value={operator}
                                onChange={event => setOperator(event.target.value)}
                            />
                        </Grid> : null}

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox
                                    required
                                    checked={age}
                                    onChange={event => setAge(event.target.checked)}
                                    name="checkedAge"
                                    color="primary"
                                />}
                                label="I confirm I am 18 or older"
                            />
                        </Grid>

                        <Grid item xs={12} className={classNames(classes.centeredContent, classes.flex)}>
                            <FormControlLabel
                                control={<Checkbox
                                    required
                                    checked={accept}
                                    onChange={event => setAccept(event.target.checked)}
                                    name="checkedAccept"
                                    color="primary"
                                />}
                                label="I accept the"
                            />
                            <Link className={classes.link} href="/termsOfUse">Terms and Conditions</Link>
                        </Grid>

                        <Grid item xs={12}>
                            <Card variant="outlined">
                                <CardContent>
                                    <SignatureCanvas
                                        canvasProps={{width: 500, height: 200}}
                                        ref={signaturePad}
                                        onEnd={() => setSignature(signaturePad.current.toData())}
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        onClick={() => signaturePad.current.clear()}
                                    >
                                        Clear
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey="6LdX59kZAAAAABS16HzfeFXr9KyKR2oq7FW4NHxC"
                        />

                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="primary" endIcon={<Icon>send</Icon>}
                                    onClick={() => onSubmit()}>
                                SEND VIDEO
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} lg={3}/>
                </>}
        </Grid>
    );
};

SubmitVideo.propTypes = {
    loading: PropTypes.bool,
    percent: PropTypes.number,
    message: PropTypes.string,
    status: PropTypes.string
};

const mapStateToProps = function (state) {
    return {
        loading: state.videoSubmitting.loading,
        percent: state.videoSubmitting.percent,
        error: state.videoSubmitting.error,
        message: state.notificationsSetting.message,
        status: state.notificationsSetting.status
    };
};

const mapDispatchToProps = {
    postVideo: submitVideo
};

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(SubmitVideo));
