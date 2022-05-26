import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import facebookImage from "../../../Assets/Images/icon_facebook.png";
import instagramImage from "../../../Assets/Images/icon_instagram.png";
import twitterImage from "../../../Assets/Images/icon_twitter.png";
import mailImage from "../../../Assets/Images/icon_mail.png";
import twitchImage from "../../../Assets/Images/icon_twitch.png";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <div className="col-lg-3 col-md-12 col-sm-7">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-7 font-weight-bold">
                        <ul className="fw-bold">
                            <li className="mb-2">
                                <a href="#ourservice" style={{ color: "black" }}>
                                    Our services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#whyus" style={{ color: "black" }}>
                                    Why Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#testimonial" style={{ color: "black" }}>
                                    Testimonial
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#faq" style={{ color: "black" }}>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-7">
                        <p className="ml-n1">Connect with us</p>
                        <div className="" style={{ display: "inline" }}>
                            <Image src={facebookImage} style={{ width: "10%" }} />
                            <Image
                                className="ms-1"
                                src={instagramImage}
                                style={{ width: "10%" }}
                            />
                            <Image
                                className="ms-1"
                                src={twitterImage}
                                style={{ width: "10%" }}
                            />
                            <Image
                                className="ms-1"
                                src={mailImage}
                                style={{ width: "10%" }}
                            />
                            <Image
                                className="ms-1"
                                src={twitchImage}
                                style={{ width: "10%" }}
                            />
                        </div>
                    </div>
                    <br />

                    <div className="col-lg-3 col-md-12 col-sm-7" id="copyright">
                        <p>Copyright Binar 2022</p>
                        <p className="brand"></p>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};