import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Search.module.css'
import Card from '../../components/Card';
import { categories } from '../../api/StaticData'
import { items } from '../../api/StaticData'

function Search() {
    const router = useRouter();
    const { type, query } = router.query;

    const search = (type == 'description') ?
        query :
        (
            query && categories.filter(category => String(category.id) == String(query))[0].name
        )

    return (
        <>
            <Head>
                <title>Search</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <span className={styles.title}>You searched for: {search}</span>
            <div className={styles.products}>
                <div className={styles.items}>
                    {items.map(
                        (item, key) => (
                            <Card key={key} item={item} />
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;