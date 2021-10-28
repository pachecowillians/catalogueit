import { Buttons, Container, Name } from './style'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useState } from 'react';

function Category({ category, updateCategory, deleteCategory }) {

    const [open, setOpen] = useState(false);
    const [categoryName, setCategoryName] = useState(category.name);

    function handleSave() {
        setOpen(false);
        updateCategory(category.id, categoryName)
    }

    return (
        <>
            <Container>
                <Name>{category.name}</Name>
                <Buttons>
                    <button type="button" onClick={() => { setOpen(true) }}>
                        <EditIcon style={{ fontSize: 25 }} />
                    </button>
                    <button type="button" onClick={() => { deleteCategory(category) }} >
                        <DeleteIcon style={{ fontSize: 25 }} />
                    </button>
                </Buttons>
            </Container>


            <Dialog
                open={open} onClose={() => { setOpen(false) }}>
                <DialogTitle style={{ fontSize: '20px' }} disableTypography>
                    Edit the category
                </DialogTitle>
                <DialogContent >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Category name"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={{ style: { fontSize: '17px' } }}
                        InputLabelProps={{ style: { fontSize: '20px' } }}
                        value={categoryName}
                        onChange={(event) => { setCategoryName(event.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button style={{ fontSize: '15px' }} onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Category;