import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Item.module.css'

function Item() {
    const router = useRouter();
    const { id } = router.query;

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

    const item = items.filter(item => String(id) == String(item.id))[0]
    console.log(item)

    return (
        <>
            <Head>
                <title>Search</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {item.description}
        </>
    );
}

export default Item;