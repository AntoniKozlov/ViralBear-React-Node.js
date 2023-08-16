import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block'
    },
    flex: {
        display: 'flex'
    },
    spacedBetween: {
        justifyContent: 'space-between'
    },
    centeredContent: {
        justifyContent: 'center'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    },
    appBar: {
        top: 'auto',
        bottom: 0
    },
    marginAuto: {
        margin: 'auto'
    },
    contactsColumn: {
        alignItems: 'baseline'
    },
    topBlock: {
        padding: '30px 0 5px 0',
        borderBottom: '3px solid white'
    },
    underLineTwo: {
        borderBottom: '2px solid white'
    },
    paddingTopBottom: {
        padding: theme.spacing(1, 0)
    },
    paddingRightLeft: {
        padding: theme.spacing(0, 1)
    },
    padding: {
        padding: theme.spacing(1, 1)
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    divider: {
        background: 'white',
        width: '0.01em'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    alignText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    minWidth: {
        minWidth: '300px'
    },
    footerTitleCenter: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    footerDirection: {
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignContent: 'center'
        },
    },
    floatRight: {
        [theme.breakpoints.up('md')]: {
            float: 'right',
        },
    },
    floatLeft: {
        [theme.breakpoints.up('md')]: {
            float: 'left',
        },
    },
    alignContentCenter: {
        alignContent: 'center'
    },
    otherItems: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    }
}));

export {useStyles}
