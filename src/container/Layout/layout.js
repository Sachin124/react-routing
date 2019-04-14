import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

import { Route } from 'react-router-dom';
import Student from '../students';
import Banner from '../Banner/banner';
import Papply from '../pApply-component';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                <Route path="/" exact component={Banner} />
                 <Route path="/student" exact component={Student} />
                 <Route path="/papply" exact component={Papply} />
                </div>
                <Footer />
            </div>

        );
    }
}

export default Layout;