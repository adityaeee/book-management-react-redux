import React from "react";
import { useEffect } from "react";
import animation from "../assets/animation/animation-books.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/features/bookSlice";

export default function UpdateBook() {
    const { id } = useParams();
    const books = useSelector((state) => state.books.listBooks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const bookToEdit = books.find((book) => book.id === id);

    const [formData, setFormData] = useState({
        judul: "",
        pengarang: "",
        penerbit: "",
        gambar: "",
    });

    useEffect(() => {
        if (bookToEdit) {
            setFormData(bookToEdit);
        }
    }, [bookToEdit]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, newBook: formData }));
        navigate("/list-books");
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="cardUpdateBookm-login ">
                <div className="card-body">
                    <h5 className="card-title">Form Update Buku</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Orang yang tidak membaca buku bagus akan melewatkan
                        kesempatan untuk menjalani hidup tambahan
                    </h6>
                    <div className="d-flex justify-content-center my-3">
                        <span style={{ width: 200, height: 110 }}>
                            <Lottie animationData={animation} />
                        </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-5 text-start">
                            <label
                                htmlFor="judul"
                                className="form-label text-start"
                            >
                                Judul Buku
                            </label>
                            <input
                                name="judul"
                                type="text"
                                className="form-control"
                                id="judul"
                                placeholder="masukkan judul buku"
                                value={formData.judul}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                htmlFor="pengarang"
                                className="form-label text-start"
                            >
                                Pengarang
                            </label>
                            <input
                                name="pengarang"
                                type="text"
                                className="form-control"
                                id="pengarang"
                                value={formData.pengarang}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                htmlFor="penerbit"
                                className="form-label text-start"
                            >
                                Penerbit
                            </label>
                            <input
                                name="penerbit"
                                type="text"
                                className="form-control"
                                id="penerbit"
                                value={formData.penerbit}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                htmlFor="gambar"
                                className="form-label text-start"
                            >
                                Link Gambar
                            </label>
                            <input
                                name="gambar"
                                type="text"
                                className="form-control"
                                id="gambar"
                                value={formData.gambar}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <button type="submit" className="btn login-button mt-2">
                            Simpan perubahan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
