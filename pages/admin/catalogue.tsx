import Head from 'next/head'
import AdminCard from '../../components/AdminCard';
import styles from '../../styles/AdminCatalogue.module.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ModalCatalogue from '../../components/ModalCatalogue';
import { items } from '../../api/StaticData'

function Catalogue() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState({});

    function openModal(item) {
        setIsModalOpen(true);
        setModalItem(item);
    }

    function closeModal() {
        setIsModalOpen(false);
        setModalItem({});
    }

    return (
        <>
            <Head>
                <title>Admin | Catalogue</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search item" />
                        <button><SearchIcon /></button>
                        <button><AddIcon /></button>
                    </div>
                    <div className={styles.products}>
                        {
                            items.map(
                                (item, key) => (
                                    <AdminCard key={key} item={item} openModal={openModal} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            {
                (isModalOpen) && (
                    <ModalCatalogue item={modalItem} closeModal={closeModal} />
                )
            }
        </>

    );
}

export default Catalogue;