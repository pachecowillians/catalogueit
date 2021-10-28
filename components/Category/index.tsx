import { Buttons, Container, Name } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Category({ category, openDialog, deleteCategory }) {
    return (
        <Container>
            <Name>{category.name}</Name>
            <Buttons>
                <button type="button" onClick={() => { openDialog(category) }}>
                    <EditIcon style={{ fontSize: 25 }} />
                </button>
                <button type="button" onClick={() => { deleteCategory(category) }}>
                    <DeleteIcon style={{ fontSize: 25 }} />
                </button>
            </Buttons>
        </Container>
    );
}

export default Category;