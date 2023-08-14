import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    centeredContent: {
        alignItems: 'center'
    },
    flex: {
        display: 'flex'
    },
    link: {
        textDecoration: 'none',
        fontSize: '1rem',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.00938em'
    },
    paddingTopBottom: {
        padding: theme.spacing(2, 0)
    },
    marginAuto: {
        margin: 'auto'
    },
    input: {
        display: 'none',
    },
    nameUpload: {
        marginBottom: '10px'
    },
    sizeGridProgress: {
        height: '100vh',
        width: '100%'
    }
}));

export {useStyles}
