import { useRouter } from 'next/router'
import Head from 'next/head'

function Search() {
    const router = useRouter();
    const { description } = router.query;

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <h1>{description}</h1>
        </>
    );
}

export default Search;