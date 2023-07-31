import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    whiteText: {
        color: 'white'
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        display: 'flex'
    },
    videoBackground: {
        backgroundImage: 'url(/assets/images/mainpage.gif)',
        backgroundSize: 'cover',
        width: '100%',
        maxWidth: 1920,
        height: 700
    },
    paddedLeft: {
        paddingLeft: theme.spacing(1)
    }
}));

export {useStyles}
