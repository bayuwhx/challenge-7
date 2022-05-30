import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import './CariMobil.css';

const CariMobil = () => {

    const [cars, setCars] = useState([]);
    const [filterCar, setFilterCar] = useState({
        driver: '',
        tanggal: '',
        waktu: '',
        penumpang: 0
    });

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
            .then(response => {
                setCars(response.data);
                console.info("CARS DATA : ", cars)
            }).catch(err => {
                console.error(err);
            });
    }, []);

    // Getting Data from Filter
    const getDriverType = (event) => {
        setFilterCar({
            driver: event.target.value
        });
    }

    const getDateRent = (event) => {
        setFilterCar((prevState) => ({
            ...prevState,
            date: event.target.value
        }));
    }

    const getTimeRent = (event) => {
        setFilterCar((prevState) => ({
            ...prevState,
            time: event.target.value
        }));
    }

    const getPassengerCount = (event) => {
        setFilterCar((prevState) => ({
            ...prevState,
            passenger: parseInt(event.target.value)
        }));
    }

    const doFilterCars = () => {
        const filteredCarsData = cars.filter((item) => item.capacity <= filterCar.passenger);

        console.info(filteredCarsData);

        setCars(filteredCarsData);

    }

    return (
        <div>
            <div className="container filter justify-content-center border-3 rounded-3 shadow-lg p-3 mb-1 bg-body rounded z-index-3 position-relative">
                <div className="row py-2 px-5 align-items-center justify-content-evenly">
                    <div className="col-3">
                        <label>Tipe Driver</label>
                        <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            id="driverType"
                            onClick={event => getDriverType(event)}
                        >
                            <option value="True">Dengan Sopir</option>
                            <option value="False">Tanpa Sopir (Lepas Kunci)</option>
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
                            onChange={event => getDateRent(event)} />
                    </div>

                    <div className="col-2">
                        <label>Waktu Jemput/Ambil</label>
                        <select
                            className="form-select time form-select-sm"
                            aria-label=".form-select-sm example"
                            id="waktuJemput"
                            onClick={event => getTimeRent(event)} >
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
                            onChange={event => getPassengerCount(event)}
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
                            onClick={() => doFilterCars()}
                        >
                            Cari Mobil
                        </Button>{" "}
                    </div>

                    <div id="allCar" className="allCar">
                        <div className="grid-container">
                            <div className="row">
                                {cars.map((value, index) => {
                                    return <>
                                        <div className="col-lg-4">
                                            <div className="card shadow-sm bg-body" style={{ width: "100%" }}>
                                                <img src={value.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="car-name">{value.model} / {value.type}</h5>
                                                    <h4 className="car-price">Rp {value.rentPerDay} / Hari</h4>
                                                    <p className="car-desc">{value.description}</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                                    </svg>  {value.capacity} Orang</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                                    </svg>  {value.transmission}</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>  Tahun {value.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default CariMobil;