import Head from 'next/head'
import Category from '../../components/Category';
import styles from '../../styles/AdminCategories.module.css'

function Categories() {

    const categories = [
        {
            id: 1,
            name: 'Sports',
        },
        {
            id: 2,
            name: 'Pool',
        },
        {
            id: 3,
            name: 'Beach',
        },
        {
            id: 4,
            name: 'Food',
        },
        {
            id: 5,
            name: 'Technology',
        },
    ];

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
                                    <Category category={category} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;