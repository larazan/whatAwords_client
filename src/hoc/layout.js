import React, { Component } from 'react';
import { useLocation } from 'react-router-dom'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import ScrollToTop from "../components/ScrollToTop";
import ScrollToBottom from "../components/ScrollToBottom";

const Layout = (props) => {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className="w-full">
                {props.children}
            </div>
            <div id="snackbar-fixed-container" ></div>
            <Footer2 />
            {/* <ScrollToBottom />
            <ScrollToTop /> */}
        </div>
    );
    
}

export default Layout;