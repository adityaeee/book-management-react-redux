import React from "react";
import animation from "../assets/animation/animation-hero.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <div
                className="row d-flex justify-content-around gap-2"
                style={{ width: "30cm" }}
            >
                <div className="col-md-5 text-center">
                    <h1 className="fw-bold text-primary">
                        Manajemen <span className="text-info">Buku</span>
                    </h1>
                    <h4 className="fw-lighter text-success mt-4">
                        Bersiaplah untuk memberikan yang terbaik dalam setiap
                        pelajaran
                    </h4>
                </div>
                <div className="col-md-5">
                    <div className="d-flex justify-content-center my-3">
                        <span style={{ width: 500, height: 110 }}>
                            <Lottie animationData={animation} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
