import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        display: 'flex'
    },
    marginAuto: {
        margin: 'auto'
    },
    textDecoration: {
        textDecoration: 'none'
    },
    textUnderline: {
        borderBottom: '2px solid #3f51b5'
    },
    video: {
        maxWidth: '400px',
        width: '100%',
        margin: 'auto'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    link: {
        textDecoration: 'none'
    },
    paddingTextWelcome: {
        padding: theme.spacing(2, 2, 2, 0)
    },
    welcomeLicenseText: {
        alignItems: 'flex-start'
    },
    marginTopBottom50: {
        margin: '50px 0px'
    },
    marginBottom25: {
        marginBottom: '25px'
    },
}));

export {useStyles}
