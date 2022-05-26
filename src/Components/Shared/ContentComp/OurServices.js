import React from "react";
import serviceImage from "../../../Assets/Images/Service.png";
import { Image } from "react-bootstrap";

export const OurServices = () => {
    return (
        <div className="Content2">
            <div className="container" id="ourservice">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mt-sm-5 mt-sm-5" id="photo">
                        <Image src={serviceImage} style={{ width: "80%" }} />
                    </div>
                    <div className="col2 col-lg-6 col-12 mt-md-5 mt-sm-5">
                        <h2 className="fw-bold">
                            Best Car Rental for any kind of trip in (Lokasimu)!
                        </h2>
                        <p className="pt-2">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                        <ul className="list pb-3">
                            <li className="p-2">
                                <span>Mobil Dengan Supir di (Lokasimu) 12 Jam </span>
                            </li>
                            <li className="p-2">
                                <span>Sewa Mobil Lepas Kunci di (Lokasimu) 24 Jam</span>
                            </li>
                            <li className="p-2">
                                <span>Sewa Mobil Jangka Panjang Bulanan </span>
                            </li>
                            <li className="p-2">
                                <span>Gratis Antar - Jemput Mobil di Bandara</span>
                            </li>
                            <li className="p-2">
                                <span>Layanan Airport Transfer / Drop In Out </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
