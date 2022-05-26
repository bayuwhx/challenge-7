import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimoni1Image from "../../../Assets/Images/Testimoni1.png";
import testimoni2Image from "../../../Assets/Images/Testimoni2.png";
import stars from "../../../Assets/Images/star.png";
import "./Content.css";

export const Testimonial = () => {
    return (
        <div>
            <div
                className="row text-center mb-4"
                id="testimonial"
                style={{ margin: "0px" }}
            >
                <h2 className="title-2">Testimonial</h2>
                <p className="description">
                    Berbagai review positif dari para pelanggan kami
                </p>
            </div>

            <OwlCarousel
                items={2}
                margin={20}
                loop={true}
                center={true}
                nav={true}
                autoplay={true}
                responsiveClass={true}
                responsive={{
                    0: {
                        items: 1,
                        nav: true,
                    },
                    576: {
                        items: 1,
                        nav: true,
                    },
                    768: {
                        items: 2,
                        nav: true,
                    },
                }}
            >
                <div className="bg-testimonial d-flex align-items-center testi-card">
                    <div className="col-md-2 user-img d-flex justify-content-center">
                        <img src={testimoni1Image} alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body desc-card">
                            <img
                                src={stars}
                                alt="star"
                                className="star-img"
                                style={{ width: "20%", height: "20%" }}
                            />
                            <p className="testi-text">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <p className="testi-user">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>

                <div className="bg-testimonial d-flex align-items-center testi-card">
                    <div className="col-md-2 user-img d-flex justify-content-center ">
                        <img src={testimoni2Image} alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body desc-card">
                            <img
                                src={stars}
                                alt="star"
                                className="star-img"
                                style={{ width: "20%", height: "20%" }}
                            />
                            <p className="testi-text">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <p className="testi-user">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};
