import Head from 'next/head'
import styles from '../../styles/AdminHome.module.css'

function Admin() {
    const isLogged = true;
    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>

            <div className={styles.container}>
                <img src="/vercel.svg" alt="Logo" />
            </div>
        </>
    );
}

export default Admin;