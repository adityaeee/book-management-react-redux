import React from "react";
import logo from "../assets/icons/books.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";

export default function () {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("login");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            className="logo react"
                            alt="React logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            {localStorage.getItem("isLoggedIn") ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-book">
                                        Tambah Buku
                                    </Link>
                                </li>
                            ) : null}

                            <li className="nav-item">
                                <Link className="nav-link" to="/list-books">
                                    Buku
                                </Link>
                            </li>
                        </ul>
                        {localStorage.getItem("isLoggedIn") ? (
                            <div>
                                <span className="navbar-text me-3">
                                    Hello, {user?.name}
                                </span>
                                <Link
                                    to="/"
                                    className="login-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            <Link to="/login" className="login-button">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
