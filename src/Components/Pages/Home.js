import React, { Component } from 'react';
import { NavbarComp } from '../Shared/NavbarComp/NavbarComp';
import { JumboTron } from '../Shared/ContentComp/JumboTron';
import { OurServices } from '../Shared/ContentComp/OurServices';
import { WhyUs } from '../Shared/ContentComp/WhyUs';
import { Testimonial } from '../Shared/ContentComp/Testimonial';
import { CtaBanner } from '../Shared/ContentComp/CtaBanner';
import { Faq } from '../Shared/ContentComp/Faq';
import { Footer } from '../Shared/FooterComp/Footer';

export default class Home extends Component {

    render() {
        return (
            <div>
                <NavbarComp />
                <JumboTron />
                <OurServices />
                <WhyUs />
                <Testimonial />
                <CtaBanner />
                <Faq />
                <Footer />
            </div>
        );
    }
}