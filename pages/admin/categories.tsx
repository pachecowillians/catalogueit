import Head from 'next/head'
import { useState } from 'react';
import Category from '../../components/Category';
import styles from '../../styles/AdminCategories.module.css'
import { categories } from '../../api/StaticData'

type Category = {
    id: number;
    name: string;
}

function Categories() {
    const [categoryName, setCategory] = useState({} as Category);
    const [categoryList, setCategoryList] = useState<Category[]>(categories)

    function handleOnChange(event) {
        setCategory(event.target.value)
    }

    function handleOnSubmit(event) {
        const newCategory = {
            id: categories.length + 1,
            name: categoryName,
        }
        // setCategoryList([newCategory, ...categoryList]);
        // setCategory({} as Category);
        // event.preventDefault();
    }

    function deleteCategory(item) {
        const newList = categoryList.filter(categoryName => categoryName != item);
        setCategoryList(newList);
    }

    function updateCategory(id, name) {
        const auxCategoryList = [...categoryList]
        const index = auxCategoryList.findIndex(categoryName => categoryName.id === id)
        auxCategoryList[index].name = name;
        setCategoryList(auxCategoryList)
    }

    return (
        <>
            <Head>
                <title>Admin | Categories</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.contentArea}>
                    <form onSubmit={handleOnSubmit} className={styles.newCategory}>
                        <input type="text" placeholder="Type the categoryName name..." value={categoryName.name} onChange={handleOnChange} />
                        <button type="submit">+</button>
                    </form>
                    <div className={styles.categoryList}>
                        {
                            categoryList.map(
                                (category, key) => (
                                    <Category
                                        key={key}
                                        category={category}
                                        updateCategory={updateCategory}
                                        deleteCategory={deleteCategory}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </div>



            {/* {
                (Object.keys(modalItem).length != 0) &&
                (
                    <ModalEditCategory item={modalItem} closeModal={closeModal} />
                )
            } */}
        </>
    );
}

export default Categories;