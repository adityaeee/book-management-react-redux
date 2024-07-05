import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteBook } from "../redux/features/bookSlice";

export default function Listbook() {
    const books = useSelector((state) => state.books.listBooks);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-book/${id}`);
    };

    const handleDelete = (id, judul) => {
        const confirmDelete = window.confirm(
            `Apakah anda yakin ingin menghapus buku "${judul}"`
        );
        if (confirmDelete) {
            dispatch(deleteBook(id));
            navigate("/list-books");
        }
    };

    return (
        <>
            <div
                className="container mt-5 pt-5"
                style={{ marginRight: "100cm" }}
            >
                <div>
                    <h2 className="text-bold text-success titles pb-4">
                        Daftar Buku
                    </h2>
                </div>
                <div className="row justify-content-center">
                    {books.map((book) => (
                        <div key={book.id} className="col-md-3 mb-3">
                            <div className="card book-card">
                                <img
                                    src={
                                        book.gambar
                                            ? book.gambar
                                            : "/src/assets/images/buku.jpeg"
                                    }
                                    className="card-img-top"
                                    alt={book.judul}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{book.judul}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        {book.pengarang}
                                    </h6>
                                    <p className="text-start">
                                        <span className="text-primary">
                                            Penerbit :
                                        </span>{" "}
                                        {book.penerbit}
                                    </p>
                                    {localStorage.getItem("isLoggedIn") && (
                                        <div>
                                            <button
                                                className="btn btn-warning badge mx-1"
                                                onClick={() =>
                                                    handleEdit(book.id)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger badge mx-1"
                                                onClick={() =>
                                                    handleDelete(
                                                        book.id,
                                                        book.judul
                                                    )
                                                }
                                            >
                                                Del
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
