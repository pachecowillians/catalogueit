import { useRouter } from 'next/router'

function Search() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>{id}</div>
    );
}

export default Search;