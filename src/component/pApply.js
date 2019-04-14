import React from 'react';
import Aux from '../hoc/helper';
import sml_banner from '../assets/img/sml_banner.png'
import apply from '../assets/img/apply.png'
const pApply = () => (
  <Aux>
    <div id="topimgBar">
      <div className="headerimg">
        <img src={sml_banner} />
        <div className="right_box">
          <h1><strong>Quick & Easy Loans for all your needs</strong></h1>
          <h2><strong>With InCred Personal Loans</strong></h2>
        </div>
        <div className="leftform fl">
          {/* <form id="corpForm" method="post" action="" enctype="multipart/form-data" name="frm"> */}
          <div className="rightPanelHeaderTxt">Help us help you!
              </div>
          <div className="inputBox">
            <input name="name" type="text" placeholder="Name" required className="rightPanelInputTxt" id="p_user_nm" /></div>
          <div className="inputBox">
            {/* <input placeholder="Mobile" name="MOBILE" id="mobile" className="rightPanelInputTxt" maxlength="10" pattern="[0-9]{10}" type="text" className="form-control"
              placeholder="" required /> */}
               <input name="MOBILE" type="text" placeholder="Mobile" required className="rightPanelInputTxt" id="p_user_nm" />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Email" name="email" id="email" className="rightPanelInputTxt" required /></div>
            <div className="inputBox">
              <input name="city" type="text" placeholder="City" required className="rightPanelInputTxt" id="p_user_city" /></div>
            <div hidden>
              <input name="LEAD" id="lead" value="PLSEMCampaign1" id="" maxlength="30" type="text" className="form-control" placeholder="" /></div>

              <div className="inputBox">
                <input name="loan_amount" type="text" placeholder="Loan Amount (up to 40 lakh)" required className="rightPanelInputTxt"
                  id="numonly" /><span id="error" >* Input digits (0 - 9)</span></div>

              <div className="inputBox">
                <input name="TIMESTAMP" type="text" hidden className="rightPanelInputTxt" id="timestamp" /></div>

              <div className="inputBox">
                <input name="authorise" type="checkbox" className="checkbx" checked="checked" id="authorise" required />
                <span className="txtBlack5">I authorize InCred Financial Services Limited to contact me. *</span></div>
              <div className="inputBox2">
                <input type="image" src={apply} id="btnSubmit" name="btnSubmit" value="Submit"
                /></div>

              <input name="utm_source" id="utm_source" maxlength="30" type="hidden" />
              <input name="utm_medium" id="utm_medium" maxlength="30" type="hidden" />
              <input name="utm_campaign" id="utm_campaign" maxlength="30" type="hidden" />
              <input name="utm_content" id="utm_content" maxlength="30" type="hidden" />
              <input name="utm_adgroup" id="utm_adgroup" maxlength="30" type="hidden" />
              <input name="utm_keyword" id="utm_keyword" maxlength="30" type="hidden" />
              <input name="utm_matchtype" id="utm_matchtype" maxlength="30" type="hidden" />
              <input name="utm_term" id="utm_term" maxlength="30" type="hidden" />
              <input name="gclid" id="gclid" maxlength="150" type="hidden" />

              {/* </form> */}

            </div>
          </div>
        </div>
        <div id="topimgbot">
        <div className="headerimg_BOT">
          <p>* By clicking the Apply Now button I confirm thatI have no objection to the InCred Financial Services Limited and/or
            its group entities contacting me for promotional offers of their products or services. I confirm that the privacy
            rights available to me under various statutes will not be exercised by me in relation to any promotional offers
            or information received from the Lender and/or its group entities.</p>
        </div>
      </div>

    </Aux>
      );
      
export default pApply;