import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Search.module.css'
import Card from '../../components/Card';

function Search() {
    const router = useRouter();
    const { type, query } = router.query;

    const items = [
        {
            id: 1,
            img: 'https://picsum.photos/200?random=1',
            description: 'Product 1',
            price: 1.20,
        },
        {
            id: 2,
            img: 'https://picsum.photos/200?random=2',
            description: 'Product 2',
            price: 2.20,
        },
        {
            id: 3,
            img: 'https://picsum.photos/200?random=3',
            description: 'Product 3',
            price: 3.20,
        },
        {
            id: 4,
            img: 'https://picsum.photos/200?random=4',
            description: 'Product 4',
            price: 4.20,
        },
        {
            id: 5,
            img: 'https://picsum.photos/200?random=5',
            description: 'Product 5',
            price: 5.20,
        },
        {
            id: 6,
            img: 'https://picsum.photos/200?random=6',
            description: 'Product 6',
            price: 6.20,
        },
        {
            id: 7,
            img: 'https://picsum.photos/200?random=7',
            description: 'Product 7',
            price: 7.20,
        },
        {
            id: 8,
            img: 'https://picsum.photos/200?random=8',
            description: 'Product 8',
            price: 8.20,
        },
        {
            id: 9,
            img: 'https://picsum.photos/200?random=9',
            description: 'Product 9',
            price: 9.20,
        },
        {
            id: 10,
            img: 'https://picsum.photos/200?random=10',
            description: 'Product 10',
            price: 10.20,
        },
    ];

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
        {
            id: 6,
            name: 'Clothes',
        },
    ];

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
            <div className={styles.container}>
                <span>You searched for: {search}</span>
                <div className={styles.products}>
                    <div className={styles.items}>
                        {items.map(
                            (item, key) => (
                                <Card key={key} item={item} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;