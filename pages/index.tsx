import Head from 'next/head'
import BannerSlider from '../components/BannerSlider';
import Card from '../components/Card';
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {

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
                <title>Catalogue it</title>
            </Head>
            <div className={styles.container}>
                <br />
                <BannerSlider items={items} />

                <br />
                <span className={styles.title}>Most popular</span>
                <Slider items={items} />

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
    )
}
