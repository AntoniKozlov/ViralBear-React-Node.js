import Grid from '@material-ui/core/Grid';
import {Provider} from 'react-redux';
import {SnackbarProvider} from 'notistack';

import Menu from '../components/features/menu/Menu';
import Footer from '../components/features/footer/Footer';
import {store} from '../redux/index';
import ScrollToTop from '../components/features/scroll-to-top/ScrollToTop';

const storeApp = store;

const RootLayout = ({ children }) => {
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}>
          <Provider store={storeApp}>
            <ScrollToTop/>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                  <Menu />
              </Grid>
              {children}
              <Grid item xs={12}>
                  <Footer />
              </Grid>
            </Grid>
          </Provider>
        </SnackbarProvider>
    );
  };

export default RootLayout;