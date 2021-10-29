import { Buttons, Container } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

function AdminCard({ item, openModal, deleteItem }) {
    return (
        <Container>
            <img src={item.img} alt="Product" />
            <span>{item.description}</span>
            <span>R$ {item.price}</span>
            <Buttons>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => { openModal(item) }}>
                    <EditIcon fontSize='large' />
                </IconButton>
                <IconButton color="secondary" aria-label="upload picture" component="span" onClick={() => { deleteItem(item) }}>
                    <DeleteIcon fontSize='large' />
                </IconButton>
            </Buttons>
        </Container>
    );
}

export default AdminCard;