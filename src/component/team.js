import React from 'react';
import Aux from '../hoc/helper';
import team from '../assets/img/team.jpg';

const teams = () => (
    <Aux>
        <section className="team page4 component">
            <div className="">
                <div className="container">
                    <div className="row">                      
                        <div className="col-md-6 pull-left team-content">
                            <h4>Team</h4>
                            <h2>In good company.</h2>
                            <p>InCred brings together a selection of professionals at the pinnacle of their respective fields. We leverage diverse
                                experiences and individual expertise to come together as a team with one common purpose - achieving a shared vision
									of making finance accessible to all.</p>
                            <a className="team-btn" href="team.html">Meet Our Team <i className="fa fa-long-arrow-right"></i></a>
                        </div>

                        <div className="col-md-6 pull-right">
                            <div className="team-round1"></div>
                            <div className="team-round2"></div>
                            <div className="team-img"><img src={team} className="img-responsive" alt="team new" /></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>        
    </Aux >
);

export default teams;