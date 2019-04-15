import React, { Component } from "react";
import Aux from "../../hoc/helper";
import classes from "./banner.module.css";

class Banner extends Component {
    render() {
        return (
            <Aux>
                <section className="page1">
                    <div className={classes.bannerImage}>
                        <div className="row">
                            <span className={classes.bannerText}>Borrow. With Confidence.<br />
                                <button className="chcke-rate show-btn">Apply Now</button>
                            </span>
                        </div>
                    </div>
                    <div class="h-quick-services" >
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div >
                                    <ul className={classes.listIndex} className="list-unstyled list-inline">
                                        <li><a href="personal-loan/index.html"><i className="fa fa-car"></i>Personal <br />Loan</a></li>
                                        <li><a href="elapply-us.html"><i className="fa fa-book"></i>Education <br />Loan</a></li>
                                        <li><a href="sme-loan/index.html"><i className="fa fa-briefcase"></i>SME Business<br />Loan</a></li>
                                        <li><a href="twl/index.html"><i className="fa fa-motorcycle"></i>Two Wheeler<br />Loan</a></li>
                                    </ul>
                                    <a data-index="2" href="#2" className="scroll-down" address="true"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Aux>
        );
    }
}

export default Banner;