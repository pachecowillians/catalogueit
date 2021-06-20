import { Body, Container, Content, Header, Form, Image, EditImage } from './style'
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { createRef, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { categories } from '../../api/StaticData'

function ModalCatalogue({ item, closeModal }) {

    const fileInput = createRef();

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

    function handleOnChangeSelect(event) {
        setCategoryId(event.target.value);
    }

    function handleOnChangeImage() {
        var file = fileInput.current.files[0];
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
                        <input type="file" id="file" hidden onChange={handleOnChangeImage} ref={fileInput} />
                        
                        <select name="category" id="category" value={categoryId} onChange={handleOnChangeSelect}>
                            {
                                categories.map(
                                    (item, key) => (
                                        <option key={key} value={item.id}>{item.name}</option>
                                    )
                                )
                            }
                        </select>
                        <button type="button"><DoneIcon /></button>
                    </Form>
                </Body>
            </Content>
        </Container>
    );
}

export default ModalCatalogue;