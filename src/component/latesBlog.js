import React, { Component } from 'react';
import Aux from '../hoc/helper';
import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.jpg';
import blog3 from '../assets/img/blog3.jpg';


const latestBlog = () => (
    <Aux>
        <section className="page3 component pt-10 " id="footer">
            <div className="">
                <div className="container">

                    <div className="col-md-12 text-center">
                        <h1 className="testi-title fs-36">Latest Blogs</h1>
                        <h3 className="title fs-20">Stay updated and make informed borrowing decisions with the tips, advice and
                       the latest financial news on our blog section.</h3>
                    </div>

                    <div className="row pt-3">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <img src={blog1} alt="blog1" className="img-fluid rounded" />
                            <div className="pt-3">
                                <p className="f-weight-600">September 20, 2018</p>
                                <h6 className="font-weight-normal">5 reasons why a personal loan is a good finance option.</h6>
                                <a href="blog/inner-blogs_PL_5reasons.html" target="_blank">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <img src={blog2} alt="blog2" className="img-fluid rounded" />
                            <div className="pt-3">
                                <p className="f-weight-600">September 20, 2018</p>
                                <h6 className="font-weight-normal">Why building a personal credit score is important and the factors affecting it? </h6>
                                <a href="blog/inner-blogs_PL_why_building.html" target="_blank">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <img src={blog3} alt="blog3" className="img-fluid rounded" />
                            <div className="pt-3">
                                <p className="f-weight-600">September 27, 2018</p>
                                <h6 className="font-weight-normal">7 tips to maintain healthy financial wellness</h6>
                                <a href="blog/inner-blogs_PL_7tips.html" target="_blank">Read More</a>
                            </div>
                        </div>
                    </div>

                        <div className="text-right" >
                            <p className="f-weight-600">
                                <a href="blog/blogs.html" className="primary tag-navy">
                                    <br></br>
                                    See More Blogs >></a></p>

                    </div>

                </div>
            </div>

        </section>


    </Aux >

);

export default latestBlog;