import { useRouter } from 'next/router'
import Head from 'next/head'

function Search() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <h1>{id}</h1>
        </>
    );
}

export default Search;