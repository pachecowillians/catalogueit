import { useRouter } from 'next/router'

function Search() {
    const router = useRouter();
    const { description } = router.query;

    return (
        <div>{description}</div>
    );
}

export default Search;