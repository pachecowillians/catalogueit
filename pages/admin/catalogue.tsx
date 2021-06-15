import Head from 'next/head'
import AdminCard from '../../components/AdminCard';
import styles from '../../styles/AdminCatalogue.module.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

function Catalogue() {

    const items = [
        {
            id: 1,
            banner: 'https://picsum.photos/1500/600?random=1',
            img: 'https://picsum.photos/200?random=1',
            description: 'Product 1',
            price: 1.20,
        },
        {
            id: 2,
            banner: 'https://picsum.photos/1500/600?random=2',
            img: 'https://picsum.photos/200?random=2',
            description: 'Product 2',
            price: 2.20,
        },
        {
            id: 3,
            banner: 'https://picsum.photos/1500/600?random=3',
            img: 'https://picsum.photos/200?random=3',
            description: 'Product 3',
            price: 3.20,
        },
        {
            id: 4,
            banner: 'https://picsum.photos/1500/600?random=4',
            img: 'https://picsum.photos/200?random=4',
            description: 'Product 4',
            price: 4.20,
        },
        {
            id: 5,
            banner: 'https://picsum.photos/1500/600?random=5',
            img: 'https://picsum.photos/200?random=5',
            description: 'Product 5',
            price: 5.20,
        },
        {
            id: 6,
            banner: 'https://picsum.photos/1500/600?random=6',
            img: 'https://picsum.photos/200?random=6',
            description: 'Product 6',
            price: 6.20,
        },
        {
            id: 7,
            banner: 'https://picsum.photos/1500/600?random=7',
            img: 'https://picsum.photos/200?random=7',
            description: 'Product 7',
            price: 7.20,
        },
        {
            id: 8,
            banner: 'https://picsum.photos/1500/600?random=8',
            img: 'https://picsum.photos/200?random=8',
            description: 'Product 8',
            price: 8.20,
        },
        {
            id: 9,
            banner: 'https://picsum.photos/1500/600?random=9',
            img: 'https://picsum.photos/200?random=9',
            description: 'Product 9',
            price: 9.20,
        },
        {
            id: 10,
            banner: 'https://picsum.photos/1500/600?random=10',
            img: 'https://picsum.photos/200?random=10',
            description: 'Product 10',
            price: 10.20,
        },
    ];

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
                                    <AdminCard key={key} item={item} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    );
}

export default Catalogue;