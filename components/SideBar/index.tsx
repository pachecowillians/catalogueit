import { Container, Logo, Options } from './style'
import Link from 'next/link'

function SideBar({ selectedItem }) {
    return (
        <Container>
            <Logo>
                <Link href="/admin">
                    <img src="/vercel.svg" alt="Logo" />
                </Link>
            </Logo>
            <Options selectedItem={selectedItem}>
                <Link href="/admin/profile">Profile</Link>
                <Link href="/admin/catalogue">Catalogue</Link>
                <Link href="/admin/categories">Categories</Link>
            </Options>
        </Container>
    );
}

export default SideBar;