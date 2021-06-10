import { useState } from 'react';
import { useRouter } from 'next/router'
import Select from "react-select";
import { CategorySearch, Container, Logo, Search } from './style'

function Header() {

    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState("-1");
    const router = useRouter();

    function handleClickLogo() {
        router.push('/');
        setCategoryId("-1");
        setDescription("");
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
        router.push(`/search/description?query=${description}`);
    }

    function handleSelectOnChange(categoryId) {
        setCategoryId(categoryId);
        router.push(`/search/category?query=${categoryId.value}`);
    }

    const options = [
        { value: "1", label: "Football" },
        { value: "2", label: "Pool" },
        { value: "3", label: "Technology" },
        { value: "4", label: "Tools" }
    ];

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
                <Select
                    name="form-field-name"
                    instanceId="category"
                    value={categoryId}
                    onChange={handleSelectOnChange}
                    options={options}
                />
            </CategorySearch>
        </Container>
    )
}

export default Header;