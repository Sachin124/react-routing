import React, { Component } from "react";
import {Pager} from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import Banner from "./Banner/banner";
import Footer from "./Layout/footer";
import Client from "./clients";
import WhyWeComponent from "./why-we-component";
import Customer from "./customer.component";
import LatestBlogs from "./latest-blog-component";
import Team from "./team.component";

class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
       
        
    }
    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };
    componentWillUnmount() {
        const body = document.getElementsByTagName("body")[0];
        body.classList.remove("addOverflow");
    }

    render() {
        const isMobile = window.innerWidth <= 500;
        const pagesNumbers = this.getPagesNumbers();
       
        const body = document.getElementsByTagName("body")[0];
       
        if(!isMobile){
            body.classList.add("addOverflow");
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
                    <Pager className="paginations" bsSize="large">
                {pagesNumbers}
            </Pager>
                </div>
    
            );
        }else{
            body.classList.remove("addOverflow");

            return (
                <div className="main">                   
                        <Banner />
                        <Client />
                        <WhyWeComponent />
                        <Customer />
                       <LatestBlogs />
                       <Team />
                        <Footer />
                </div>
    
            );
        }
       
    }
}

export default FullPage;