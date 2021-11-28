import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import ScrollToTop from "../components/ScrollToTop";
import ScrollToBottom from "../components/ScrollToBottom";

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="page_container container mx-auto min-h-screen">
                    {this.props.children}
                </div>
                <Footer/>
                <ScrollToBottom />
                <ScrollToTop />
            </div>
        );
    }
}

export default Layout;