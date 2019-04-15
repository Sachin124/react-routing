import React from 'react';
import Aux from '../hoc/helper';
import Test1 from '../assets/img/test1.png';
import Test2 from '../assets/img/test2.png';
import Test3 from '../assets/img/test3.png';
import Test4 from '../assets/img/test4.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const customers = () => (
 
    <Aux>
        <section className="page3 component" id="customer1">
            <div className="container">
                <div className="col-md-12">
                    <h3 className="testi-title fs-36">Real Customer Stories</h3>
                </div>
                <OwlCarousel className="owl-theme" autoWidth  margin={10}>
                    <div className="col-sm-6">
                        <div className="item">
                            <div className="offer-bx">
                                <div className="flot-img"><img src={Test1} alt="testimonial" /></div>
                                <p>"The team at InCred was a pleasure to work with and the entire process was extremely smooth. Looking forward to
												a long relationship with InCred."</p>
                                <div className="author-testi">
                                    <span className="testi-name name-author">Ajith Karimpana</span>
                                    <br />
                                    <span className="testi-name name-desig">Founder & CEO, Furlenco</span>
                                    <br />
                                    <span className="testi-name name-role">Business Loan Customer</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="item">
                            <div className="offer-bx">
                                <div className="flot-img"><img src={Test2} /></div>
                                <p>"The unique thing about InCred is that they focus beyond the academics of a student and personally meet and discuss
												future plans"</p>
                                <div className="author-testi">
                                    <span className="testi-name name-author">Nikhil Patil</span>
                                    <br />
                                    <span className="testi-name name-desig">US MS Applicant</span>
                                    <br />
                                    <span className="testi-name name-role">Education Loan Customer</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="item">
                            <div className="offer-bx">
                                <div className="flot-img"><img src={Test3} alt="testimonial 1" /></div>
                                <p>"The customer service provided by the team was a big value add. A special mention for the fast processing of the
												loan which was very important for me."</p>
                                <div className="author-testi">
                                    <span className="testi-name name-author">Amey Sakpal</span>
                                    <br />
                                    <span className="testi-name name-desig">VFX Manager</span>
                                    <br />
                                    <span className="testi-name name-role">Personal Loan Customer</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="item">
                            <div className="offer-bx">
                                <div className="flot-img"><img src={Test4} alt="testimonial 3" /></div>
                                <p>"InCred ki service bahut achchi lagi. Hamara loan bahut jaldi sanction ho gaya. Koi bhi dikkat nahi hui. Aapka
												system achcha hai."</p>
                                <div className="author-testi">
                                    <span className="testi-name name-author">Matru Yadav</span>
                                    <br />

                                    <span className="testi-name name-role">Housing Loan Customer</span></div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="item"><h4>2</h4></div> */}
                </OwlCarousel>
            </div>

        </section>


    </Aux>
);

export default customers;