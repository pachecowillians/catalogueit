import { Container, Logo, Option, Options } from './style'
import Link from 'next/link'
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CategoryIcon from '@material-ui/icons/Category';

function SideBar({ selectedItem }) {
    return (
        <Container>
            <Logo>
                <Link href="/admin">
                    <img src="/vercel.svg" alt="Logo" />
                </Link>
            </Logo>
            <Options selectedItem={selectedItem}>
                <Link href="/admin/profile">
                    <Option>
                        <PersonIcon />
                        <span>Profile</span>
                    </Option>
                </Link>
                <Link href="/admin/catalogue">
                    <Option>
                        <ListIcon />
                        <span>Catalogue</span>
                    </Option>
                </Link>
                <Link href="/admin/categories">
                    <Option>
                        <CategoryIcon />
                        <span>Categories</span>
                    </Option>
                </Link>
            </Options>
        </Container>
    );
}

export default SideBar;