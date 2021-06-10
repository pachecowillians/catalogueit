import Head from 'next/head'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {

    const items = [
        {
            img: 'https://picsum.photos/200?random=1',
            description: 'Product 1',
            price: 1.20,
        },
        {
            img: 'https://picsum.photos/200?random=2',
            description: 'Product 2',
            price: 2.20,
        },
        {
            img: 'https://picsum.photos/200?random=3',
            description: 'Product 3',
            price: 3.20,
        },
        {
            img: 'https://picsum.photos/200?random=4',
            description: 'Product 4',
            price: 4.20,
        },
        {
            img: 'https://picsum.photos/200?random=5',
            description: 'Product 5',
            price: 5.20,
        },
        {
            img: 'https://picsum.photos/200?random=6',
            description: 'Product 6',
            price: 6.20,
        },
        {
            img: 'https://picsum.photos/200?random=7',
            description: 'Product 7',
            price: 7.20,
        },
        {
            img: 'https://picsum.photos/200?random=8',
            description: 'Product 8',
            price: 8.20,
        },
        {
            img: 'https://picsum.photos/200?random=9',
            description: 'Product 9',
            price: 9.20,
        },
        {
            img: 'https://picsum.photos/200?random=10',
            description: 'Product 10',
            price: 10.20,
        },
    ];

    return (
        <>
            <Head>
                <title>Catalogue it</title>
            </Head>
            <div className={styles.container}>
                <Slider items={items} />
                <div>Hello world!</div>
            </div>
        </>
    )
}
