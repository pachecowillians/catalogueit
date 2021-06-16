import { Buttons, Container } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminCard({ item, openModal }) {
    return (
        <Container>
            <img src={item.img} alt="Product" />
            <span>{item.description}</span>
            <span>R$ {item.price}</span>
            <Buttons>
                <button onClick={() => { openModal(item) }}><EditIcon /></button>
                <button><DeleteIcon /></button>
            </Buttons>
        </Container>
    );
}

export default AdminCard;