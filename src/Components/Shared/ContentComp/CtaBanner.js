import React from "react";
import { Button } from "react-bootstrap";

export const CtaBanner = () => {
    return (
        <div className="Content5">
            <div
                className="border text-white col-lg-8 col-md-8 col-sm-8 m-auto mt-5 p-5"
                style={{ backgroundColor: "#0d28a6" }}
            >
                <h2 className="mb-4 fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="ms-2 fw-bold" variant="success" href="/cars">
                    Mulai Sewa Mobil
                </Button>
            </div>
        </div>
    );
};
