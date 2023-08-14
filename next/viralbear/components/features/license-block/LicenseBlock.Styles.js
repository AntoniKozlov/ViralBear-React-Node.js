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
        margin: '30px',
        width: '500px',
        maxWidth: '85%'
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
    marginTop: {
        marginTop: 50
    }
}));

export {useStyles}
