import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";
import Banner from "./Banner/banner";
import Footer from "./Layout/footer";
import Client from "./clients";
import WhyWeComponent from "./why-we-component";
import Customer from "./customer.component";

class FullPage extends Component {

    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }



    render() {
        return (
            <ReactPageScroller ref={c => this.reactPageScroller = c}>
                {/* <div>hello</div> */}
                <Banner />
                <Client />
                <WhyWeComponent />
                <Customer />                
                <Footer />

            </ReactPageScroller>
        );
    }
}

export default FullPage;