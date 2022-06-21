import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className=' container-footer text-center  mt-5' style={{height:'40px'}}>
            <p>
                <small >Copywrite © {year} Name</small>
            </p>
        </footer>
    );
};

export default Footer;