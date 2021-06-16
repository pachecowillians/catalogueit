import Head from 'next/head'
import { useState } from 'react';
import Category from '../../components/Category';
import ModalEditCategory from '../../components/ModalEditCategory';
import styles from '../../styles/AdminCategories.module.css'
import { categories } from '../../api/StaticData'

function Categories() {

    const [modalItem, setModalItem] = useState({});

    function openModal(item) {
        setModalItem(item);
    }

    function closeModal() {
        setModalItem({});
    }

    return (
        <>
            <Head>
                <title>Admin | Categories</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.contentArea}>
                    <div className={styles.newCategory}>
                        <input type="text" placeholder="Type the category name..." />
                        <button type="button">+</button>
                    </div>
                    <div className={styles.categoryList}>
                        {
                            categories.map(
                                (category, key) => (
                                    <Category key={key} category={category} openModal={openModal} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>

            {
                (Object.keys(modalItem).length != 0) &&
                (
                    <ModalEditCategory item={modalItem} closeModal={closeModal} />
                )
            }
        </>
    );
}

export default Categories;