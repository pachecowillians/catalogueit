import { Buttons, Container, Name } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Category({ category, openModal }) {

    return (
        <Container>
            <Name>{category.name}</Name>
            <Buttons>
                <button
                    type="button"
                    onClick={
                        () => { openModal(category) }
                    }
                >
                    <EditIcon style={{ fontSize: 25 }} />
                </button>
                <button type="button">
                    <DeleteIcon style={{ fontSize: 25 }} />
                </button>
            </Buttons>
        </Container>
    );
}

export default Category;