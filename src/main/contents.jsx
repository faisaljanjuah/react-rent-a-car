import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './../pages/home';
import Services from './../pages/services';
import Cars from './../pages/cars';
import About from './../pages/about';
import Blog from './../pages/blog';
import Contact from './../pages/contact';
import NotFound from '../pages/not-found';

const ContentArea = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/cars" component={Cars} />
                <Route path="/services" component={Services} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/" exact component={Home} />

                <Redirect to="/not-found" />
            </Switch>
        </React.Fragment>
    );
}

export default ContentArea;