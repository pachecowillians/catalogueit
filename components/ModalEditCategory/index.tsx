import { Body, Container, Content, Form, Header } from './style'
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useState } from 'react';

function ModalEditCategory({ item, closeModal }) {
    const [category, setCategory] = useState(item.name);

    function handleOnChange(event) {
        setCategory(event.target.value);
    }

    return (
        <Container>
            <Content>
                <Header>
                    <span>Edit category</span>
                    <CloseIcon onClick={closeModal} />
                </Header>
                <Body>
                    <Form>
                        <input type="text" placeholder="Category name" onChange={handleOnChange} value={category} />
                        <button type="button"><DoneIcon /></button>
                    </Form>
                </Body>
            </Content>
        </Container>
    );
}

export default ModalEditCategory;