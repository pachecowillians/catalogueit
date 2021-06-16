import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Item.module.css'
import { items } from '../../api/StaticData'

function Item() {
    const router = useRouter();
    const { id } = router.query;

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