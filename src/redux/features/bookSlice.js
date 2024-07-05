import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listBooks: [
        {
            id: "123456",
            judul: "Jatuh ke Lubang Hitam",
            pengarang: "Neil Degrasse Tyson",
            penerbit: "Kepustakaan Populer Gramedia",
            gambar: "https://cdn.gramedia.com/uploads/picture_meta/2024/5/26/oyyfbtbnpkmdfkkbwrnf8b.jpg",
        },
        {
            id: "123457",
            judul: "Sistem Hortikultura",
            pengarang: "Prof. Kusumiyati, SP., MAgr.Sc., Ph.D",
            penerbit: "Kepustakaan Populer Gramedia",
            gambar: "https://cdn.gramedia.com/uploads/picture_meta/2024/5/26/lbjisbnw25busgtupdzqug.jpg",
        },
        {
            id: "123458",
            judul: "The Day it Finally Happens",
            pengarang: "Mike Pearl",
            penerbit: "Kepustakaan Populer Gramedia",
            gambar: "https://cdn.gramedia.com/uploads/picture_meta/2024/1/21/equrnn2mulumw42nsdrjla.jpg",
        },
        {
            id: "123489",
            judul: "Toko Jajanan Ajaib Zenitendo 1",
            pengarang: "Reiko Hiroshima",
            penerbit: "Kepustakaan Populer Gramedia",
            gambar: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/25/qnyuvkkqd8nf6wfhwldgi9.jpg",
        },
        {
            id: "123469",
            judul: "A to Z Penyakit Lupus",
            pengarang: "dr. Sandra Sinthya Langow, Sp.PD-KR",
            penerbit: "Kepustakaan Populer Gramedia",
            gambar: "https://cdn.gramedia.com/uploads/products/1-i-9u85ap.jpg",
        },
        {
            id: "123479",
            judul: "Whale Finds A Friend",
            pengarang: "Tiya Hall & Chris Biggin",
            penerbit: "Kepustakaan Populer Gramedia",
            gambar: "https://cdn.gramedia.com/uploads/products/snme8unasv.jpg",
        },
        {
            id: "123459",
            judul: "The Silver Eyes",
            pengarang: "Five Nights At Freddy`S Graphic Novel",
            penerbit: "Scholastic Us",
            gambar: "https://cdn.gramedia.com/uploads/items/71C9ykmClBL.jpg",
        },
    ],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.listBooks.push(action.payload);
        },
        updateBook: (state, action) => {
            const { id, newBook } = action.payload;
            const index = state.listBooks.findIndex((book) => book.id == id);
            if (index !== -1) {
                state.listBooks[index] = { ...newBook, id };
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.listBooks = state.listBooks.filter((book) => book.id !== id);
        },
    },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
