import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/CategorySearch.module.css'
import Card from '../../components/Card';

function Search() {
    const router = useRouter();
    const { type, query } = router.query;
    console.log(type, query);

    return (
        <>
            <Head>
                <title>Search</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.container}>
                <div className={styles.products}>
                    <div className={styles.items}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;