import React, { Component } from 'react';
import Header from './main/header';
import ContentArea from './main/contents';
import Footer from './main/footer';

class Site extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <ContentArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Site;