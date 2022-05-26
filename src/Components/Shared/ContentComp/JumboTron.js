import React from "react";
import { Col, Row, Button, Image, Container } from "react-bootstrap";
import "./Content.css";
import mobilImage from "../../../Assets/Images/Mobil.png";

export const JumboTron = () => {
    return (
        <div className="Content1">
            <Container>
                <Row className="mt-5">
                    <Col xs={12} md={12} lg={7} className="row align-items-end">
                        <div className="Col1">
                            <h1 className="fw-bold">
                                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                            </h1>
                            <p className="w-75 mt-4">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <Button variant="success" href="/sewa">
                                Mulai sewa Mobil
                            </Button>{" "}
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={5} className="align-items-end">
                        <Image
                            className="mobil z-index-3 position-relative"
                            src={mobilImage}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
