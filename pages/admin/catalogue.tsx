import Head from 'next/head'
import AdminCard from '../../components/AdminCard';
import styles from '../../styles/AdminCatalogue.module.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ModalCatalogue from '../../components/ModalCatalogue';
import { categories, items } from '../../api/StaticData'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { PhotoCamera } from '@material-ui/icons';

function Catalogue() {
    const [dialogItem, setDialogItem] = useState({} as Product);
    const [products, setProducts] = useState<Product[]>(items);
    const [open, setOpen] = useState(false);

    function openModal(item) {
        setOpen(true);
        setDialogItem(item);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleSave() {
        const auxProducts = [...products];
        auxProducts[auxProducts.findIndex((product) => product.id == dialogItem.id)] = dialogItem;
        setProducts(auxProducts);
        setOpen(false);
    }

    const handleOnChange = (key, value) => {

        const dialogitem = {
            ...dialogItem,
            [key]: value,
        };
        setDialogItem(dialogitem);
        console.log(dialogitem)
    };

    const Input = styled('input')({
        display: 'none',
    });

    type Product = {
        id: number;
        description: string;
        price: number;
        category: number;
    }

    return (
        <>
            <Head>
                <title>Admin | Catalogue</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search item" />
                        <button><SearchIcon /></button>
                        <button><AddIcon /></button>
                    </div>
                    <div className={styles.products}>
                        {
                            products.map(
                                (item, key) => (
                                    <AdminCard key={key} item={item} openModal={openModal} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit product</DialogTitle>
                <DialogContent>
                    <div className={styles.dialogArea}>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={dialogItem.description}
                        onChange={(event) => { handleOnChange('description', event.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Price"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={dialogItem.price}
                        onChange={(event) => { handleOnChange('price', event.target.value) }}
                    />
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            value={dialogItem.category}
                            onChange={(event) => { handleOnChange('category', event.target.value) }}
                            label="Category">
                            {
                                categories.map(
                                    (category, key) => <MenuItem key={key} value={category.id}>{category.name}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}

export default Catalogue;