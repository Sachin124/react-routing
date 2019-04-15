import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

import { Route } from 'react-router-dom';
import Student from '../students';
import Papply from '../pApply-component';
import FullPage from '../FullPage';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                <Route path="/" exact component={FullPage} />
                 <Route path="/student" exact component={Student} />
                 <Route path="/papply" exact component={Papply} />
                </div>
            </div>

        );
    }
}

export default Layout;