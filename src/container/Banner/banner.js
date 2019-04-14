import React, { Component } from "react";
import Aux from "../../hoc/helper";
import classes from "./banner.module.css";
class Banner extends Component {
    render() {
        return (
            <Aux>
                <div className="section">
                    <div className={classes.bannerImage}>
                        <div className="row">
                            <span className={classes.bannerText}>Borrow. With Confidence.<br />
                                <button className="chcke-rate show-btn">Apply Now</button>
                            </span>
                        </div>
                            {/* <div className="row">
                                <div className="h-quick-services">
                                <ul className="list-unstyled list-inline" >
                                    <li><a href="personal-loan/index.html"><i className="fa fa-car"></i>Personal <br />Loan</a></li>
                                </ul>
                                </div>
                        </div> */}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Banner