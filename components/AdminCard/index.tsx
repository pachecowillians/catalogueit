import { Buttons, Container } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

function AdminCard({ item, openModal }) {
    return (
        <Container>
            <img src={item.img} alt="Product" />
            <span>{item.description}</span>
            <span>R$ {item.price}</span>
            <Buttons>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <EditIcon fontSize='large' onClick={() => { openModal(item) }} />
                    </IconButton>
                </label>
                <label htmlFor="icon-button-file">
                    <IconButton color="secondary" aria-label="upload picture" component="span">
                        <DeleteIcon fontSize='large' />
                    </IconButton>
                </label>
            </Buttons>
        </Container>
    );
}

export default AdminCard;