import React, { Component } from "react";
import Aux from "../../hoc/helper";
import classes from "./banner.module.css";

class Banner extends Component {
    render() {
        return (
            <Aux>
                <div className="">
                    <div className={classes.bannerImage}>
                        <div className="row">
                            <span className={classes.bannerText}>Borrow. With Confidence.<br />
                                <button className="chcke-rate show-btn">Apply Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Banner;