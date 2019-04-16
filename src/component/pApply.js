import React from 'react';
import Aux from '../hoc/helper';
import sml_banner from '../assets/img/sml_banner.png';
import apply from '../assets/img/apply.png';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';

import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
import icon4 from '../assets/img/icon4.png';
import Footer from '../container/Layout/footer';


const pApply = () => (
  <Aux>
    <div id="topimgBar">
      <div className="marginOff pt-5-5">
        <div className="row">
          <div className="col-md-8 paddingOff">
            <img src={sml_banner} className="img responsive bannerImg" alt="banner" />
            <div className="right_box">
              <h1 className="text-title"><strong>Quick & Easy Loans for all your needs</strong></h1>
              <h2 className="text-center"><strong>With InCred Personal Loans</strong></h2>
            </div>
          </div>
          <div className="col-md-4 paddingOff">
            <div className="submit-form">
              {/* <form id="corpForm" method="post" action="" enctype="multipart/form-data" name="frm"> */}
              <div className="rightPanelHeaderTxt">Help us help you!
              </div>
              <div className="inputBox">
                <input name="name" type="text" placeholder="Name" required className="rightPanelInputTxt" id="p_user_nm" /></div>
              <div className="inputBox">
                {/* <input placeholder="Mobile" name="MOBILE" id="mobile" className="rightPanelInputTxt" maxLength="10" pattern="[0-9]{10}" type="text" className="form-control"
              placeholder="" required /> */}
                <input name="MOBILE" type="text" placeholder="Mobile" required className="rightPanelInputTxt" id="p_user_nm" />
              </div>
              <div className="inputBox">
                <input type="email" placeholder="Email" name="email" id="email" className="rightPanelInputTxt" required /></div>
              <div className="inputBox">
                <input name="city" type="text" placeholder="City" required className="rightPanelInputTxt" id="p_user_city" /></div>

              <div className="inputBox">
                <input name="loan_amount" type="text" placeholder="Loan Amount (up to 40 lakh)" required className="rightPanelInputTxt"
                  id="numonly" /><span id="error" >* Input digits (0 - 9)</span></div>

              <div className="inputBox">
                <input name="TIMESTAMP" type="text" hidden className="rightPanelInputTxt" id="timestamp" /></div>

              <div className="inputBox">
                <input name="authorise" type="checkbox" className="checkbx"  id="authorise" required />
                <span className="txtBlack5">I authorize InCred Financial Services Limited to contact me. *</span></div>
              <div className="inputBox2">
                <img src={apply} id="btnSubmit" alt="img" name="btnSubmit" value="Submit"
                /></div>

              <input name="utm_source" id="utm_source" maxLength="30" type="hidden" />
              <input name="utm_medium" id="utm_medium" maxLength="30" type="hidden" />
              <input name="utm_campaign" id="utm_campaign" maxLength="30" type="hidden" />
              <input name="utm_content" id="utm_content" maxLength="30" type="hidden" />
              <input name="utm_adgroup" id="utm_adgroup" maxLength="30" type="hidden" />
              <input name="utm_keyword" id="utm_keyword" maxLength="30" type="hidden" />
              <input name="utm_matchtype" id="utm_matchtype" maxLength="30" type="hidden" />
              <input name="utm_term" id="utm_term" maxLength="30" type="hidden" />
              <input name="gclid" id="gclid" maxLength="150" type="hidden" />

              {/* </form> */}

            </div>


          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="card subText">
              <div className="card-body m-15 ">
                <p className="text-justify">* By clicking the Apply Now button I confirm thatI have no objection to the InCred Financial Services Limited and/or its group entities contacting me for promotional offers of their products or services. I confirm that the privacy rights available to me under various statutes will not be exercised by me
                 in relation to any promotional offers or information received from the Lender and/or its group entities.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="marginOff row">
        <div className="col-md-12">
          <br />
          <h2 className="text-center">What We Offer</h2>
          <br />
          <div className="row">
            <div className="col-md-3">
              <div className="card img-card-size">
                <img className="card-img-top" src={img1} alt="Card image cap" />
                <div className="card-body img-card">
                  <h5 className="card-title text-center">Wedding Loan</h5>
                  <p className="card-text">Finance a wedding or honeymoon in the family with wedding loans.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card img-card-size">
                <img className="card-img-top" src={img2} alt="Card image cap" />
                <div className="card-body img-card">
                  <h5 className="card-title text-center">Wedding Loan</h5>
                  <p className="card-text">Finance a wedding or honeymoon in the family with wedding loans.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card img-card-size">
                <img className="card-img-top" src={img3} alt="Card image cap" />
                <div className="card-body img-card">
                  <h5 className="card-title text-center">Wedding Loan</h5>
                  <p className="card-text">Finance a wedding or honeymoon in the family with wedding loans.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card img-card-size">
                <img className="card-img-top" src={img4} alt="Card image cap" />
                <div className="card-body img-card">
                  <h5 className="card-title text-center">Wedding Loan</h5>
                  <p className="card-text">Finance a wedding or honeymoon in the family with wedding loans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className=" row grey-box">
        <div className="col-md-12">
          <br />
          <h2 className="text-center">Many Benefits of InCred</h2>
          <div className="col-md-8 offset-md-2">
            <p className="text-center color-gray"><strong>Quick, simple and flexible. Whether you are looking for a quicker way to pay off an existing debt, getting married, or taking a dream vacation, InCred Personal Loans offer you plenty of financial solutions to build the right loan for you.</strong></p>
          </div>
          <br />
        </div>


        <div className="mid_block2_box fl">
          <div className="mid_block2_imgblock">
            <img src={icon1} width="72" height="72" />
          </div>
          <h3 className="text-center">Product Benefits</h3>
          <ul>
            <li>Products tailor made for your needs</li>
            <li>Higher loan limits</li>
            <li>Flexible repayment options</li>
          </ul>
        </div>
        <div className="mid_block2_box fl">
          <div className="mid_block2_imgblock">
            <img src={icon2} width="72" height="72" />
          </div>
          <h3 className="text-center">Customer Focused</h3>
          <ul>
            <li>A human approach to lending</li>
            <li>Respectful and caring</li>
            <li>World className customer service</li>
          </ul>
        </div>
        <div className="mid_block2_box fl">
          <div className="mid_block2_imgblock">
            <img src={icon3} width="72" height="72" />
          </div>
          <h3 className="text-center">Simple & Easy</h3>
          <ul>
            <li>No branch visit required</li>
            <li>Quick loan sanction</li>
            <li>Minimal documentation</li>
          </ul>
        </div>
        <div className="mid_block2_box fl">
          <div className="mid_block2_imgblock">
            <img src={icon4} width="72" height="72" />
          </div>
          <h3 className="text-center">Repayment</h3>
          <ul>
            <li>Loans starting at 11.49% p.a.</li>
            <li>Loans with repayment period of up to 60 months</li>
            <li>Processing fee starting at 1% taken one time. No Upfront Charges</li>
          </ul>
        </div>


      </div>

      <br />
      <br />

      {/* <div id="testimonials_block">
        <div className="cd-testimonials-wrapper cd-container">
          <ul className="cd-testimonials">
            <li>
              <div className="cd-author">
                <img src={img1} alt="Author image" />
                <h2>Amey Sakpal- VFX Manager</h2>
                <p>The customer service provided by the team was a big value add. A special mention for the fast processing
                  of the loan which was very important for me.</p>
              </div>
            </li>
          </ul>
        </div>

      </div> */}

      <div className="row justify-content-center">
        <div className="author">
          <img src={img1} className="img-circle" alt="Author image" />
        </div>
      </div>

      <div className="row justify-content-center">
        <h2 className="orange-color">Amey Sakpal- VFX Manager</h2>
      </div>

      <div className="row justify-content-center">
        <p>The customer service provided by the team was a big value add. A special mention for the fast processing of the loan which was very important for me.</p>
      </div>
      <br />
      <br /><br />
      <br />
    </div>

    <Footer />
  </Aux>
);

export default pApply;