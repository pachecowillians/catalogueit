import { Buttons, Container, Name } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Category({ category }) {
    return (
        <Container>
            <Name>{category.name}</Name>
            <Buttons>
                <button type="button"><EditIcon style={{fontSize:25}}/></button>
                <button type="button"><DeleteIcon style={{fontSize:25}}/></button>
            </Buttons>
        </Container>
    );
}

export default Category;