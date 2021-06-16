import Head from 'next/head'
import { useState } from 'react';
import Category from '../../components/Category';
import ModalEditCategory from '../../components/ModalEditCategory';
import styles from '../../styles/AdminCategories.module.css'
import { categories } from '../../api/StaticData'

function Categories() {

    const [modalItem, setModalItem] = useState({});
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState(categories)

    function openModal(item) {
        setModalItem(item);
    }

    function closeModal() {
        setModalItem({});
    }

    function handleOnChange(event) {
        setCategory(event.target.value)
    }

    function handleOnSubmit(event) {
        const newCategory = {
            id: categories.length + 1,
            name: category,
        }
        setCategoryList([newCategory, ...categoryList]);
        setCategory('');
        event.preventDefault();
    }

    function deleteCategory(item) {
        const newList = categoryList.filter(category => category != item);
        setCategoryList(newList);
    }

    return (
        <>
            <Head>
                <title>Admin | Categories</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.contentArea}>
                    <form onSubmit={handleOnSubmit} className={styles.newCategory}>
                        <input type="text" placeholder="Type the category name..." value={category} onChange={handleOnChange} />
                        <button type="submit">+</button>
                    </form>
                    <div className={styles.categoryList}>
                        {
                            categoryList.map(
                                (category, key) => (
                                    <Category key={key} category={category} openModal={openModal} deleteCategory={deleteCategory} />
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