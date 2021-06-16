import { Body, Container, Content, Header, Form, Image, EditImage } from './style'
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import Select from "react-select";
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';

function ModalCatalogue({ item, closeModal }) {

    const [categoryId, setCategoryId] = useState("-1");
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [image, setImage] = useState('');

    function handleOnChangeDescription(event) {
        setDescription(event.target.value);
    }

    function handleOnChangePrice(event) {
        setPrice(event.target.value);
    }

    function handleOnChangeSelect(categoryId) {
        setCategoryId(categoryId);
    }

    function handleOnChangeImage() {
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            setImage(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImage('');
        }
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
            <Content>
                <Header>
                    <span>Edit category</span>
                    <CloseIcon onClick={closeModal} />
                </Header>
                <Body>
                    <Image>
                        <label htmlFor="file">
                            <img src={(image.length == 0) ? item.img : image} alt="Product" />
                            <EditImage>
                                <EditIcon style={{ fontSize: 25 }} />
                            </EditImage>
                        </label>
                    </Image>
                    <Form>
                        <input type="text" placeholder="Description" onChange={handleOnChangeDescription} value={description} />
                        <input type="number" placeholder="Price" onChange={handleOnChangePrice} value={price} />
                        <input type="file" id="file" hidden onChange={handleOnChangeImage} />

                        <Select
                            name="category"
                            instanceId="category"
                            placeholder="Category"
                            value={categoryId}
                            onChange={handleOnChangeSelect}
                            options={options}
                            styles={colourStyles}
                        />
                        <button type="button"><DoneIcon /></button>
                    </Form>
                </Body>
            </Content>
        </Container>
    );
}

export default ModalCatalogue;