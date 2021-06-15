import Head from 'next/head'
import styles from '../../styles/AdminProfile.module.css'
import EditIcon from '@material-ui/icons/Edit';

function Profile() {
    return (
        <>
            <Head>
                <title>Admin | Profile</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.profilePicture}>
                        <label htmlFor="file">
                            <img src="/vercel.svg" alt="Profile picture" />
                            <div className={styles.editImage}>
                                <EditIcon style={{ fontSize: 25 }} />
                            </div>
                        </label>
                    </div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                        <input type="file" id="file" hidden />
                    </div>
                    <button>Save</button>
                </div>
            </div>
        </>
    );
}

export default Profile;