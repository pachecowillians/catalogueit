import { Container, Logo, Option, Options, Toggle } from './style'
import Link from 'next/link'
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CategoryIcon from '@material-ui/icons/Category';
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function SideBar({ selectedItem }) {

    const [isSideBarActive, setIsSideBarActive] = useState(false);

    function toggleSideBar() {
        setIsSideBarActive(!isSideBarActive);
    }
    return (
        <>
            <Toggle onClick={toggleSideBar} active={isSideBarActive}>
                {!isSideBarActive ?
                    <MenuIcon />
                    :
                    <CloseIcon />
                }
            </Toggle>
            <Container active={isSideBarActive}>
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
        </>
    );
}

export default SideBar;