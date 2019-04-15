import React from 'react';
import Aux from '../hoc/helper';
import Asset1 from '../assets/img/Asset1.svg';
import Asset2 from '../assets/img/Asset2.svg';
import Asset3 from '../assets/img/Asset3.svg';


const whyWe = () => (
    <Aux>
        <section className="page6 lend-sec" id="why-incred">
            <div className="container-fluid">
                <div className="container">
                    <div className="row why-incred-row">
                        <div className="col-md-12 text-center" >
                            <h1 className="why-subtitle fs-24" >Why InCred?</h1>
                            <h3 className="why-title fs-36">Lending Reinvented</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="h-quick-services">
                                <img src={Asset1} alt="Asset 1" />
                            </div>
                            <div className="yincred-content">
                                <ul className="featureList">
                                    <h3>Product Benefits</h3>
                                    <li className="tick">Products tailor made for your needs</li>
                                    <li className="tick">Higher loan limits</li>
                                    <li className="tick">Flexible repayment options</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="h-quick-services">
                                <img src={Asset2} alt="Asset 2" />
                            </div>
                            <div className="yincred-content">
                                <ul className="featureList">
                                    <h3>Customer Focused</h3>
                                    <li className="tick">A human approach to lending</li>
                                    <li className="tick">Respectful and caring</li>
                                    <li className="tick">World class customer service</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="h-quick-services">
                                <img src={Asset3} alt="Asset 3" />
                            </div>
                            <div className="yincred-content">
                                <ul className="featureList">
                                    <h3>Simple & Easy</h3>
                                    <li className="tick">No branch visit required</li>
                                    <li className="tick">Instant loan sanction</li>
                                    <li className="tick">Online loan account management</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    </Aux>
);

export default whyWe;

