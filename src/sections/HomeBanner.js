import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import $ from "jquery";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { useEffect } from "react/cjs/react.production.min";

import PopUp from "../headers/popup.jpg";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const HomeBanner = () => {
  const url =
    "//truedreamvision.us14.list-manage.com/subscribe/post?u=51761d6ff82cc5847dec0f01a&amp;id=ebc32383db";
  const SimpleForm = () => <MailchimpSubscribe url={url} />;
  const CustomForm = ({ status, message, onValidated }) => {
    let email, name, walletaddress, phonenumber;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: name.value,
        PHONE: walletaddress.value,
        WALLET: phonenumber.value,
      });

    return (
      <div>
        {status === "sending" && (
          <div
            style={{ color: "#ff0ddb", textAlign: "center", fontSize: "25px" }}
          >
            sending...
          </div>
        )}
        {status === "error" && (
          <div
            style={{ color: "#ff0ddb", textAlign: "center", fontSize: "25px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "#ff0ddb", textAlign: "center", fontSize: "25px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div class="form-row">
          <div class="col pb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              ref={(node) => (name = node)}
            ></input>
          </div>
        </div>
        <div class="form-row">
          <div class="col pb-2">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              ref={(node) => (email = node)}
            ></input>
          </div>
        </div>
        <div class="form-row">
          <div class="col pb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              ref={(node) => (phonenumber = node)}
            ></input>
          </div>
        </div>
        <div class="form-row">
          <div class="col pb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Metamask Wallet Address"
              ref={(node) => (walletaddress = node)}
            ></input>
          </div>
        </div>
        <button className="btn btn-lg btn-block BtnClose" onClick={submit}>
          Submit
        </button>
      </div>
    );
  };

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          <table className="  mx-auto">
            <tr className="sss">
              <th scope="col" className="DHMS ">
                {days} <br />
                <span className="Txt">DAYS</span>
              </th>
              <th scope="col"> </th>
              <th scope="col" className="DHMS ">
                {hours}
                <br />
                <span className="Txt">HOURS</span>
              </th>
              <th scope="col"> </th>
              <th scope="col" className="DHMS ">
                {minutes}
                <br />
                <span className="Txt">MINUTES</span>
              </th>
              <th scope="col"> </th>
              <th scope="col" className="DHMS ">
                {seconds}
                <br />
                <span className="Txt">SECONDS</span>
              </th>
            </tr>
          </table>
        </span>
      );
    }
  };

  const Close = () => {
    $(".lightbox").slideUp();
  };

  return (
    <>
      <div className="home_banner" id="home">
        <div className="hidden-xs text-center">
          <LazyLoadImage
            className="hol"
            src="img/ezgif.com-gif-maker.gif"
            title=""
            alt=""
            width="100%"
          />
        </div>
        <div className="visible-xs text-center">
          <LazyLoadImage
            className="hol"
            src="img/ezgif.com-gif-maker.gif"
            title=""
            alt=""
            width="100%"
          />
        </div>
        <div className="home_banner_position">
          <div
            className="home_banner_text"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>

          <div class="container TP">
            <div class="modal fade " id="myModal" role="dialog">
              <div class="modal-dialog ">
                <div class=" modal-content TP ">
                  <div class="container-fluid ps-md-0">
                    <div class="row g-0 ">
                      <div class="d-none d-md-flex bg-image col-md-3 col-lg-5 "></div>
                      <div class="col-md-9 col-lg-7">
                        <div class="login py-5 align-items-center ">
                          <h4
                            class="text-center login-heading mb-4 text-white"
                            style={{ fontFamily: "Rubikk" }}
                          >
                            PRIDE PIXIES NFT COLLECTION
                          </h4>
                          <h6 className="PS text-center">
                            PRE-SALE STARTS IN:
                          </h6>
                          <Countdown
                            date={new Date(1685577600000)}
                            renderer={renderer}
                          />
                          <p className="text-center text-white py-3 GWL">
                            GET WHITELISTED FOR PRE-SALE EVENT BY FILLING THE
                            FORM BELOW:
                          </p>
                          <MailchimpSubscribe
                            url={url}
                            render={({ subscribe, status, message }) => (
                              <CustomForm
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll_down"></div>
        {/* <div className="banner_icon banner_icon1" data-aos="fade-left"
                 data-aos-duration="1000">
                <img src="img/banner_icon1.png" title="" alt=""/>
            </div>
            <div className="banner_icon banner_icon2" data-aos="fade-left"
                 data-aos-duration="1000">
                <img src="img/banner_icon2.png" title="" alt=""/>
            </div>
            <div className="banner_icon banner_icon3" data-aos="fade-left"
                 data-aos-duration="1000">
                <img src="img/banner_icon3.png" title="" alt=""/>
            </div> */}
      </div>
    </>
  );
};
export default HomeBanner;
