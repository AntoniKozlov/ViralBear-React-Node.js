import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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
        textAlign: 'start',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export {useStyles}
