import Header from '../components/Header';
import SideBar from '../components/SideBar';
import '../styles/globals.css'
import styles from '../styles/App.module.css'

function MyApp({ Component, pageProps, router }) {

    function renderSideBar() {
        if (router.pathname != '/admin/login') {
            const itemIndex = [
                {
                    url: '/admin',
                    index: -1,
                },
                {
                    url: '/admin/profile',
                    index: 1,
                },
                {
                    url: '/admin/catalogue',
                    index: 2,
                },
                {
                    url: '/admin/categories',
                    index: 3,
                },
            ]
            const selectedItem = router.pathname;
            const selectedIndex = itemIndex.filter(item => item.url == selectedItem)
            return <SideBar selectedItem={selectedIndex[0].index} />
        }
    }

    return (
        <>
            {
                (router.pathname.startsWith('/admin'))
                    ? (
                        <>
                            <div className={styles.adminContainer}>
                                {renderSideBar()}
                                <Component {...pageProps} />
                            </div>

                        </>
                    )
                    : (
                        <>
                            <Header />
                            <Component {...pageProps} />
                        </>
                    )
            }
        </>
    );
}

export default MyApp
