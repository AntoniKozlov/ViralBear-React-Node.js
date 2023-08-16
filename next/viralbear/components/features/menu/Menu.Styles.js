import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    flex: {
        display: 'flex'
    },
    spacedEvenly: {
        justifyContent: 'space-evenly'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
}));

export { useStyles }
