import { Outlet } from 'react-router-dom';
import { Box } from '@/components'
import Header from './Header';
import "./DefaultLayout.scss";

function DefaultLayout() {

    return (  
        <Box classNames={['dft-layout']}>
            <Header />
            <Outlet />
        </Box>
    );
}

export default DefaultLayout;