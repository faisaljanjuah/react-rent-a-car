import React from 'react';
import Navbar from './../components/navbar';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 mb-20">
                        <h4>About</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed. Ipsum dolor sit amet, consectetur adipisicing elit nemo assumenda.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-8">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4 mb-20">
                                <Navbar menuClass={'nav-vertical'} menuHeading={'Quick Links'} />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 mb-20">
                                <Navbar menuClass={'nav-vertical'} menuHeading={'Directions'} />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 mb-20">
                                <Navbar menuClass={'nav-vertical'} menuHeading={'Contact Details'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="copyrights">
                            <p>Copyright © {new Date().getFullYear()} All rights reserved | This theme is created with <i className="icon-react"></i> by <a href="https://domain.com" target="_blank" rel="noopener noreferrer">Faisal Janjua</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;