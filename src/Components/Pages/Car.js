import React, { Component } from 'react';
import { NavbarComp } from '../Shared/NavbarComp/NavbarComp';
import { JumboTron } from '../Shared/ContentComp/JumboTron';
import Search from '../Shared/CarComp/CariMobil';
import { Footer } from '../Shared/FooterComp/Footer';
export default class Car extends Component {

    render() {
        return (
            <div>
                <NavbarComp />
                <JumboTron />
                <Search />
                <Footer />
            </div>
        );
    }
}