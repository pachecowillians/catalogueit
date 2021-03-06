import Head from 'next/head'
import styles from '../../styles/AdminLogin.module.css'

function Login() {
    return (
        <>
            <Head>
                <title>Admin | Login</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.body}>
                    <img src="/vercel.svg" alt="Logo" />
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;