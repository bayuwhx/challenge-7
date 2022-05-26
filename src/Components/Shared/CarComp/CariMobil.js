import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './CariMobil.css'

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="container filter justify-content-center border-3 rounded-3 shadow-lg p-3 mb-1 bg-body rounded z-index-3 position-relative">
                    <div className="row py-2 px-5 align-items-center justify-content-evenly">
                        <div className="col-3">
                            <label>Tipe Driver</label>
                            <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                id="tipeDriver"
                            >
                                <option selected>Pilih Tipe Driver</option>
                                <option value="1">Dengan Sopir</option>
                                <option value="0">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label htmlFor="date">Pilih Tanggal</label>
                            <br />
                            <input
                                className="form-control"
                                required
                                type="date"
                                name="date"
                                id="date"
                            />
                        </div>

                        <div className="col-2">
                            <label>Waktu Jemput/Ambil</label>
                            <select
                                className="form-select time form-select-sm"
                                aria-label=".form-select-sm example"
                                id="waktuJemput"
                            >
                                <option selected>Pilih Waktu</option>
                                <option value="1">08.00 WIB</option>
                                <option value="2">09.00 WIB</option>
                                <option value="3">10.00 WIB</option>
                                <option value="4">11.00 WIB</option>
                                <option value="5">12.00 WIB</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label>Penumpang</label>
                            <select
                                className="form-select people form-select-sm"
                                aria-label=".form-select-sm example"
                                id="penumpang"
                            >
                                <option selected>Jumlah Penumpang</option>
                                <option value="2">1-2</option>
                                <option value="4">3-4</option>
                                <option value="6">5-6</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <Button
                                className="px-lg-5 fw-bold"
                                variant="success"
                                id="cariMobil"
                                href="#"
                            >
                                Cari Mobil
                            </Button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
