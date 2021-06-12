import { useState } from 'react';
import { useRouter } from 'next/router'
import Select from "react-select";
import { CategorySearch, Container, Logo, Search } from './style'
import SearchIcon from '@material-ui/icons/Search';

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

    const categories = [
        {
            id: 1,
            name: 'Sports',
        },
        {
            id: 2,
            name: 'Pool',
        },
        {
            id: 3,
            name: 'Beach',
        },
        {
            id: 4,
            name: 'Food',
        },
        {
            id: 5,
            name: 'Technology',
        },
        {
            id: 6,
            name: 'Clothes',
        },
    ];

    const options = [];

    categories.map(
        (category) => {
            options.push({ value: category.id, label: category.name })
        }
    )

    const colourStyles = {
        control: styles => (
            {
                ...styles,
                cursor: 'pointer',
                border: 0,
                boxShadow: 'none',
            }
        ),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => (
            {
                ...styles,
                cursor: "pointer",
                backgroundColor: isSelected ? '#282a36' : isFocused ? 'rgba(68, 71, 90, 0.3)' : '#f8f8f2',
            }
        ),
    };

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
                <button type="button" onClick={handleClickButton}><SearchIcon /></button>
            </Search>
            <CategorySearch>
                <Select
                    name="category"
                    instanceId="category"
                    placeholder="Category"
                    value={categoryId}
                    onChange={handleSelectOnChange}
                    options={options}
                    styles={colourStyles}
                />
            </CategorySearch>
        </Container>
    )
}

export default Header;