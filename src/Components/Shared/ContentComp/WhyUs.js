import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import icon1Image from "../../../Assets/Images/icon1.png";
import icon2Image from "../../../Assets/Images/icon2.png";
import icon3Image from "../../../Assets/Images/icon3.png";
import icon4Image from "../../../Assets/Images/icon4.png";

export const WhyUs = () => {
    return (
        <div className="Content3" id="whyus">
            <Container>
                <h2 className="fw-bold mt-5">Why Us?</h2>
                <p className="mt-3 mb-4">Mengapa harus pilih Binar Car Rental?</p>
                <Row xs={1} lg={4} md={2}>
                    <Card
                        className="col-lg-3 mb-3"
                        style={{ width: "18rem", marginLeft: "0.8em", borderRadius: "10px" }}
                    >
                        <Card.Img
                            className="ms-3 mt-3"
                            variant="top"
                            src={icon1Image}
                            style={{ width: "13%" }}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold">Mobil Lengkap</Card.Title>
                            <Card.Text>
                                Tersedia banyak pilihan mobil kondisi masih baru, bersih dan
                                terawat.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-lg-3 mb-3"
                        style={{ width: "18rem", marginLeft: "2.3em", borderRadius: "10px" }}
                    >
                        <Card.Img
                            className="ms-3 mt-3"
                            variant="top"
                            src={icon2Image}
                            style={{ width: "13%" }}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold">Harga Murah</Card.Title>
                            <Card.Text>
                                Harga murah dan bersaing, bisa dibandingkan harga kami dengan
                                rental mobil lain.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-lg-3 mb-3"
                        style={{ width: "18rem", marginLeft: "2.3em", borderRadius: "10px" }}
                    >
                        <Card.Img
                            className="ms-3 mt-3"
                            variant="top"
                            src={icon3Image}
                            style={{ width: "13%" }}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold">Layanan 24 Jam</Card.Title>
                            <Card.Text>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                tersedia di akhir minggu lain.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-lg-3 mb-3"
                        style={{ width: "18rem", marginLeft: "2.3em", borderRadius: "10px" }}
                    >
                        <Card.Img
                            className="ms-3 mt-3"
                            variant="top"
                            src={icon4Image}
                            style={{ width: "13%" }}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold">Sopi Profesional</Card.Title>
                            <Card.Text>
                                Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu
                                tepat waktu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};
