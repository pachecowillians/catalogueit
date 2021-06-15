import Head from 'next/head'
import styles from '../../styles/AdminProfile.module.css'
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';

function Profile() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    function handleOnChangeUsername(event) {
        setUsername(event.target.value);
    }

    function handleOnChangePassword(event) {
        setPassword(event.target.value);
    }

    function handleOnChangeEmail(event) {
        setEmail(event.target.value);
    }

    function handleOnChangePhone(event) {
        setPhone(event.target.value);
    }

    function handleOnChangeProfilePicture() {
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            setProfilePicture(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setProfilePicture('');
        }
    }

    return (
        <>
            <Head>
                <title>Admin | Profile</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.profilePicture}>
                        <label htmlFor="file">
                            <img src={(profilePicture.length == 0) ? "/vercel.svg" : profilePicture} alt="Profile picture" />
                            <div className={styles.editImage}>
                                <EditIcon style={{ fontSize: 25 }} />
                            </div>
                        </label>
                    </div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Username" onChange={handleOnChangeUsername} value={username} />
                        <input type="password" placeholder="Password" onChange={handleOnChangePassword} value={password} />
                        <input type="email" placeholder="Email" onChange={handleOnChangeEmail} value={email} />
                        <input type="text" placeholder="Phone" onChange={handleOnChangePhone} value={phone} />
                        <input type="file" id="file" hidden onChange={handleOnChangeProfilePicture} />
                    </div>
                    <button>Save</button>
                </div>
            </div>
        </>
    );
}

export default Profile;