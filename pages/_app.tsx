import Header from '../components/Header';
import SideBar from '../components/SideBar';
import '../styles/globals.css'
import styles from '../styles/App.module.css'
import Main from '../components/Layout/Main';
import Admin from '../components/Layout/Admin';

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            {
                (router.pathname.startsWith('/admin'))
                    ? (
                        <Admin route={router.pathname}>
                            <Component {...pageProps} />
                        </Admin>
                    )
                    : (
                        <Main>
                            <Component {...pageProps} />
                        </Main>
                    )
            }


        </>
    );
}

export default MyApp
