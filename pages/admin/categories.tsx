import Head from 'next/head'
import { useState } from 'react';
import Category from '../../components/Category';
import styles from '../../styles/AdminCategories.module.css'
import { categories } from '../../api/StaticData'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

type Category = {
    id: number;
    name: string;
}

function Categories() {
    const [inputCategoryName, setInputCategoryName] = useState('')
    const [categoryList, setCategoryList] = useState<Category[]>(categories)
    const [dialogCategory, setdialogCategory] = useState({} as Category)
    const [open, setOpen] = useState(false);

    function handleOnChange(event) {
        setInputCategoryName(event.target.value)
    }

    function handleOpenDialog(category) {
        setdialogCategory(category);
        setOpen(true);
    }

    function handleOnSubmit(event) {
        const newCategory = {
            id: categories.length + 1,
            name: inputCategoryName
        }
        setCategoryList([newCategory, ...categoryList]);
        setInputCategoryName('')
        event.preventDefault();
    }

    function deleteCategory(item) {
        const newList = categoryList.filter(inputCategory => inputCategory != item);
        setCategoryList(newList);
    }

    function updateCategory(category) {
        const auxCategoryList = [...categoryList]
        const index = auxCategoryList.findIndex(cat => cat.id === category.id)
        auxCategoryList[index].name = category.name;
        setCategoryList(auxCategoryList)
        setOpen(false);
    }

    return (
        <>
            <Head>
                <title>Admin | Categories</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.contentArea}>
                    <form onSubmit={handleOnSubmit} className={styles.newCategory}>
                        <input type="text" placeholder="Type the category name..." value={inputCategoryName} onChange={handleOnChange} />
                        <button type="submit">+</button>
                    </form>
                    <div className={styles.categoryList}>
                        {
                            categoryList.map(
                                (category, key) => (
                                    <Category
                                        key={key}
                                        category={category}
                                        openDialog={handleOpenDialog}
                                        deleteCategory={deleteCategory}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </div>

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
                        InputLabelProps={{ style: { fontSize: '17px' } }}
                        value={dialogCategory.name}
                        onChange={(event) => { setdialogCategory({ id: dialogCategory.id, name: event.target.value }) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                        style={{ fontSize: '15px' }}
                        variant="outlined"
                    >
                        Close
                    </Button>
                    <Button
                        style={{ fontSize: '15px' }}
                        onClick={() => { updateCategory(dialogCategory) }}
                        color="primary"
                        variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Categories;