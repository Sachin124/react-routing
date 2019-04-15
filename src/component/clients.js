import React from 'react';
import Aux from '../hoc/helper';
import bubble from '../assets/img/bubble-tail.png';
import all from '../assets/img/all.png';

const clients = ()=>(
    <Aux>
        <section className="h-press component" id="press">
				<div className="">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="btm-circle"></div>
								<div className="h-press-bubble">
									<h4>InCred in the News</h4>
									<p>See what people are
										<br /> saying about us.</p>
									<a href="incred-in-press.html" className="inpress-btn">Read More <i className="fa fa-long-arrow-right"></i></a>
									<div className="bubble-tail"><img src={bubble} alt="bubble tag" /></div>
								</div>
							</div>
							<div className="col-md-6">
								<img src={all} className="all-img" alt="press" />
							</div>
						</div>
					</div>
				</div>
			</section>

    </Aux>
);

export default clients;