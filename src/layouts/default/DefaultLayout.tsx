import { Outlet, useLocation } from 'react-router-dom';

import Header from '@layouts/default/header';
import Footer from '@layouts/default/footer';

import './styles.scss';
import { useEffect } from 'react';

function DefaultLayout() {
    const { pathname } = useLocation();

    //TODO: Implement SearchContext

    useEffect(() => {
        console.log(location.pathname);
    }, [location])

    console.log('default-layout re-render');

    return (  
        <div id="default-layout">
            <Header classNames={'header-section'}>
                Header
                {
                    pathname === '/' && (
                        <div>
                            
                        </div>
                    )
                }
            </Header>
            <main className="main-section">
                <Outlet />
            </main>
            <Footer classNames={"footer-section"}>
                Footer
            </Footer>
        </div>
    );
}

export default DefaultLayout;