import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

import { Route } from 'react-router-dom';
import Student from '../students';
import Papply from '../pApply-component';
import FullPage from '../FullPage';
import Aux from '../../hoc/helper';
class Layout extends Component {
    render() {
      
        // if (condition) {
            
        // }
        return (
            <Aux>
                <Header />
                <div className="container-fluid">
                    <Route path="/" exact component={FullPage} />
                    <Route path="/student" exact component={Student} />
                    <Route path="/papply" exact component={Papply} />
                </div>
                {/* <Footer /> */}

            </Aux>

        );
    }
}

export default Layout;