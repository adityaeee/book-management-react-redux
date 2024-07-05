import React from "react";
import animation from "../assets/animation/animation-login.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAuthState } from "../redux/features/authSlice";

export default function Login() {
    const user = useSelector((state) => state.auth.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const emailUser = user.email;
        const passwordUser = user.password;
        const nameUser = user.name;

        if (email == emailUser && password == passwordUser) {
            dispatch(setAuthState({ isLoggedIn: true }));
            navigate("/");

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", JSON.stringify({ name: nameUser }));
        } else {
            alert("Email atau Password salah");
        }
    };

    return (
        <div className="container  mt-2">
            <div className="card form-login ">
                <div className="card-body">
                    <h5 className="card-title">Form Login</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Masukkan email dan pasword anda
                    </h6>
                    <div className="d-flex justify-content-center my-3">
                        <span style={{ width: 200, height: 110 }}>
                            <Lottie animationData={animation} />
                        </span>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3 mt-5 text-start">
                            <label
                                htmlFor="email"
                                className="form-label text-start"
                            >
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="example@duck.com"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <div id="emailHelp" className="form-text">
                                Pastikan email yang anda masukkan sudah benar
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>

                        <button type="submit" className="btn login-button mt-2">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
