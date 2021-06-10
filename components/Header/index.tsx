import { useState } from 'react';
import { useRouter } from 'next/router'
import { CategorySearch, Container, Logo, Search } from './style'

function Header() {

    const [categoryId, setCategoryId] = useState(-1);
    const [description, setDescription] = useState('');
    const router = useRouter();

    function handleSelectOnChange(event) {
        setCategoryId(event.target.value);
        router.push(`/search/category/${categoryId}`);
    }

    function handleClickLogo() {
        router.push('/');
    }

    function handleInputOnChange(event) {
        setDescription(event.target.value);
    }

    function handleInputKeyPress(event) {
        if (event.key == 'Enter') {
            handleClickButton();
        }
    }

    function handleClickButton() {
        router.push(`/search/description/${description}`);
    }

    return (
        <Container>
            <Logo>
                <img src="/vercel.svg" alt="Logo" onClick={handleClickLogo} />
            </Logo>
            <Search>
                <input
                    type="text"
                    placeholder="Search a product..."
                    onChange={handleInputOnChange}
                    onKeyPress={handleInputKeyPress}
                    value={description}
                />
                <button type="button" onClick={handleClickButton}>&rarr;</button>
            </Search>
            <CategorySearch>
                <select name="category" id="category" onChange={handleSelectOnChange} value={categoryId}>
                    <option value="-1" disabled hidden>Choose a category</option>
                    <option value="1">Football</option>
                    <option value="2">Technology</option>
                    <option value="3">Pool</option>
                    <option value="4">Beach</option>
                </select>
            </CategorySearch>
        </Container>
    )
}

export default Header;