import React from "react";
import animation from "../assets/animation/animation-books.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/features/bookSlice";

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [judul, setJudul] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [gambar, setGambar] = useState("");

    const generateId = () => {
        const date = new Date();
        const day = date.getDay().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return day + minutes + seconds;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = generateId();
        dispatch(addBook({ id, judul, pengarang, penerbit, gambar }));
        navigate("/list-books");
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="card form-login ">
                <div className="card-body">
                    <h5 className="card-title">Form Registrasi Buku</h5>
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
                                onChange={(e) => setJudul(e.target.value)}
                                required
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
                                onChange={(e) => setPengarang(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="mb-3 text-start">
                            <label
                                htmlFor="penerbit"
                                className="form-label text-start"
                            >
                                Penerbit Buku
                            </label>
                            <input
                                name="penerbit"
                                type="text"
                                className="form-control"
                                id="penerbit"
                                onChange={(e) => setPenerbit(e.target.value)}
                                required
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
                                onChange={(e) => setGambar(e.target.value)}
                                placeholder="kosongkan jika tidak ada!"
                            ></input>
                        </div>

                        <button type="submit" className="btn login-button mt-2">
                            Tambah buku
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
