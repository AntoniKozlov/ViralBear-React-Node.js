import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#3f51b5',
        opacity: '0.5'
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    flex: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    block: {
        display: 'block',
    },
    imageBackground: {
        backgroundImage: 'url(/assets/images/boat-at-autumn-lake.jpg)',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        width: '100%',
        maxWidth: '1920px',
        height: '100%',
        backgroundRepeat: 'no-repeat'
    },
    paddingBrands: {
        padding: theme.spacing(2)
    },
    whiteText: {
        color: '#fff'
    },
    padding: {
        padding: theme.spacing(4)
    },
    workBlockSection: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto auto auto'
    },
    textUnderline: {
        borderBottom: '2px solid #3f51b5'
    },
    brands: {
        alignItems: 'center',
        margin: 'auto',
        textAlign: 'center'
    },
    paddingTop: {
        paddingTop: theme.spacing(4)
    },
    paddingTopBottom: {
        padding: theme.spacing(4, 0)
    },
    descriptionDirection: {
        display: 'block',
        margin: 'auto',
        flexDirection: 'row',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignContent: 'center'
        },
    },
}));

export {useStyles}
