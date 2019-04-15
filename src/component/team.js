import React from 'react';
import Aux from '../hoc/helper';
import team from '../assets/img/team.jpg';

const teams = () => (
    <Aux>
        <section className="team page4 component">
            <div className="">
                <div className="container">
                    <div className="row mt-200">                      
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
        {/* <section className="footer page6" id="footer">
            <div className="container-fluid">
                <div className="container">
                    <div className="row footer-links">
                        <div className="col-sm-3 col-xs-6">
                            <h5>PRODUCTS</h5>
                            <ul className="list-unstyled">

                                <li><a href="personal-loan/index.html">Personal Loans</a></li>
                                <li><a href="elapply-us.html">Education Loans</a></li>
                                <li><a href="sme-loan/index.html">SME Business Loans</a></li>
                                <li><a href="twl/index.html">Two Wheeler Loans</a></li>
                            </ul>
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="incred-in-press.html">InCred In News</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="partnership.html">Partnerships</a></li>
                                <li><a href="incredible-customer-stories.html">Testimonials</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/Advisory+Note+-+VISU.pdf">Advisory Note</a></li>
                                <li><a className="mailus" href="termsofuse.html">Terms of Use</a></li>
                                <li><a className="mailus" href="privacypolicy.html">Privacy Policy</a></li>
                            </ul>

                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <h5>Regulatory / Corporate Information</h5>
                            <p className="footer-text">InCred Housing Finance Private Limited(formerly known as Bee Secure Home Finance Pvt Ltd)</p>
                            <ul className="list-unstyled">
                                <li><a className="mailus" href="board-of-directors-bee-secure.html">Board of Directors</a></li>
                                <li><a className="mailus" href="fair-practice-code-beesecure.html">Fair Practice Code</a></li>
                                <li><a className="mailus" href="KYC_BeeSecure.html">List of KYC Documents</a></li>
                                <li><a className="mailus" href="MITC.html">MITC for Home Loans</a></li>
                                <li><a className="mailus" href="grievance-bee-secure.html">Grievance Redressal Policy</a></li>
                                <li><a className="mailus" href="corporate_governance.html">Corporate Governance Guidelines</a></li>
                                <li><a className="mailus" href="related-party-policy-bee-secure.html">Policy on Related Party Transactions</a></li>
                                <li><a className="mailus" href="EGM-notice-bee-secure.html">Notices of General Meetings</a></li>
                                <li><a className="mailus" href="term-appointment-ID.html">T&amp;C Of The Appointment Of Independent Directors</a></li>
                                <li><a className="mailus" href="resignation-notice-bee-secure.html">Resignation of Directors</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/Whistle Blower Policy.pdf">Whistle Blower Policy</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/Policy for Determining Interest Rates, Processing & other Charges.pdf">Policy for Determining Interest Rates, Processing &amp; other Charges</a></li>

                            </ul>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <h5>Regulatory / Corporate Information</h5>
                            <p className="footer-text">InCred Financial Services Limited(formerly known as Visu Leasing and Finance Pvt Ltd)</p>
                            <ul className="list-unstyled">
                                <li><a className="mailus" href="board-of-directors.html">Board of Directors</a></li>
                                <li><a className="mailus" href="visu-regulatory-details.html">Corporate Details</a></li>
                                <li><a className="mailus" href="fair-practice-code.html">Fair Practice Code</a></li>
                                <li><a className="mailus" href="KYC.html">List of KYC Documents</a></li>
                                <li><a className="mailus" href="corp-gov.html">Corporate Governance Guidelines</a></li>
                                <li><a className="mailus" href="related-party-policy.html">Policy on Related Party Transactions</a></li>
                                <li><a className="mailus" href="EGM-notice.html">Notices of General Meetings</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/18.12.11_Code of insider trading.pdf" target="_blank">Code of Insider Trading</a></li>
                                <li><a className="mailus" href="financial-results.html">Financial Results</a></li>
                                <li><a className="mailus" href="term-appointment-ID.html">T&amp;C Of The Appointment Of Independent Directors</a></li>
                                <li><a className="mailus" href="grievance.html">Grievance Redressal Policy</a></li>
                                <li><a className="mailus" href="terms-and-conditions-pl.html">General T&C</a></li>
                                <li><a className="mailus" href="resignation-notice.html">Resignation of Directors</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/VISU- NRC Policy.pdf">NRC Policy</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/CSR Policy.pdf">CSR Policy</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/Whistle Blower Policy.pdf">Whistle Blower Policy</a></li>
                                <li><a className="mailus" href="https://www.incred.com/docs/Interest Rate Model.pdf">Policy for Determining Interest Rates, Processing &amp; other Charges</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <h5>EMAIL</h5>
                            <ul className="list-unstyled">
                                <li><a className="mailus" href="mailto:care@incred.com">care@incred.com</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="offices.html">Our Addresses and Locations</a>
                                </li>
                            </ul>
                            <h5>SUPPORT</h5>
                            <ul className="list-unstyled">
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="incred-career/index.html">Careers</a></li>

                            </ul>
                            <div className="phone-number">
                                <i className="fa fa-phone"></i>
                                <a href="tel:18605002192">1860 500 2192</a>
                                <ul className="list-unstyled list-inline">
                                    <li className="social"><a href="https://twitter.com/InCredFin" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li className="social"><a href="https://www.facebook.com/InCredIndia/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li className="social"><a href="https://www.linkedin.com/company/incred-finance/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    <li className="social"><a href="https://www.instagram.com/incredfin" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    <li className="social"><a href="https://www.youtube.com/channel/UCWDW_L_2lSaDAL4O5ghj7yg" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row copy-right">
                        <div className="col-sm-12 copy-before">
                            <div className="col-md-4">Copyright © 2017 InCred.</div>
                            <div className="col-md-8 text-right">InCred Financial Services Limited is a NBFC registered with the RBI
                                InCred Housing Finance Private Limited
                                is a HFC registered with the NHB
							</div>
                        </div>
                    </div>
                </div>
            </div>

        </section> */}

    </Aux >
);

export default teams;