import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";
import Banner from "./Banner/banner";
import Footer from "./Layout/footer";
import Client from "./clients";
import WhyWeComponent from "./why-we-component";
import Customer from "./customer.component";
import LatestBlogs from "./latest-blog-component";
import Team from "./team.component";

class FullPage extends Component {

    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }



    render() {
        return (
            <div className="main">
                <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <Banner />
                    <Client />
                    <WhyWeComponent />
                    <Customer />
                   <LatestBlogs />
                   <Team />
                    <Footer />
                </ReactPageScroller>
            </div>

        );
    }
}

export default FullPage;