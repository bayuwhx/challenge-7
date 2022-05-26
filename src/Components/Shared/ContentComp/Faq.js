import React from "react";
import { Row, Container, Col, Accordion } from "react-bootstrap";

export const Faq = () => {
    return (
        <div className="Content6" id="faq">
            <Container>
                <Row>
                    <Col xs={12} md={7} lg={5}>
                        <h4 className="fw-bold">Frequently Asked Question</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </Col>
                    <Col xs={12} md={5} lg={7}>
                        <Accordion id="accordionExample">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header id="headingOne">
                                    Apa saja syarat yang dibutuhkan?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <strong>KTP/SIM</strong> sebagai alat penjamin, apabila ada
                                        hal yang sesuai ketentuan, maka bisa dipertanggung jawabkan
                                        oleh customer
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion id="accordionExample">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header id="headingTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <strong>7 Hari</strong>, apabila customer ingin kurang dari
                                        7 hari dan lepas kunci, maka akan dikenakan biaya tambahan
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion id="accordionExample">
                            <Accordion.Item eventKey="2">
                                <Accordion.Header id="headingThree">
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <strong>3 Hari</strong>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion id="accordionExample">
                            <Accordion.Item eventKey="3">
                                <Accordion.Header id="headingFour">
                                    Apakah Ada biaya antar-jemput?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <strong>Tidak ada</strong>, karena itu sudah bagian dari
                                        service kami, namun ada syarat ketentuan jarak.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion id="accordionExample">
                            <Accordion.Item eventKey="4">
                                <Accordion.Header id="headingFive">
                                    Bagaimana jika terjadi kecelakaan?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <strong>Tanggung jawab customer</strong>, apabila terjadi
                                        kerusakan barang yang disewa.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
