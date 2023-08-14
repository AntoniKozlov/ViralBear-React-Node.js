import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    flex: {
        display: 'flex'
    },
    spacedBetween: {
        justifyContent: 'space-between'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
}));

export { useStyles }
