import Head from 'next/head'
import BannerSlider from '../components/BannerSlider';
import Card from '../components/Card';
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import { items } from '../api/StaticData'

export default function Home() {
    return (
        <>
            <Head>
                <title>Catalogue it</title>
            </Head>

            <br />
            <BannerSlider items={items} />

            <br />
            <span className={styles.title}>Most popular</span>
            <Slider items={items} />

            <span className={styles.title}>You can like</span>
            <div className={styles.products}>
                <div className={styles.items}>
                    {
                        items.map(
                            (item, key) => (
                                <Card key={key} item={item} />
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}
