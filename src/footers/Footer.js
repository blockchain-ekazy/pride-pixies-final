import React from "react";

import ImgH from "../Components/Imgs/Shop Pride pixies.png";
import ImgHM from "../Components/Imgs/12154EDC-21FF-4E3B-9E2A-80248BC57507.png";

const Footer = () => {
  return (
    <footer className="footer_div">
      {/* <img src="img/footer_bg.png" title="" alt="" width="100%" className="hidden-xs"/> */}
      {/* <img src="img/footer_mob_banner.png" title="" alt="" width="100%" className="visible-xs"/> */}
      <div className="footer_position">
        <div className="footer_position_flex">
          <div className="footer_position_inner">
            <div className="footer_position_inner_left ">
              <img src={ImgH} className="w-50 mx-auto d-block"></img>
              {/* <h3>
                <em>SHOP</em>
                <br />
                PRIDE PIXIES
              </h3> */}
              <p>
                Become a member of the strongest and Fastest Growing NFT
                community.
              </p>
              <div className="footer_btn_flex">
                <div className="community_flex">
                  <div className="community_inner">
                    <a
                      href="https://twitter.com/PridePixies_NFT"
                      target="_blank"
                      className="py-3 btn"
                    >
                      {" "}
                      <i class=" fa-brands fa-twitter  IconsH"></i>
                      <span>FOLLOW US</span>
                    </a>
                  </div>

                  <div className="community_inner">
                    <a
                      href="https://www.instagram.com/pridepixiesnft"
                      target="_blank"
                      className="py-3 btn"
                    >
                      {" "}
                      <i class=" fa-brands fa-instagram  IconsH"></i>
                      <span>FOLLOW US</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_position_inner hidden-xs">
            <div className="footer_position_logo">
              <a href="#home">
                <img src="img/footer_logo.gif" title="" alt="" />
                <br></br>
                <p className="pt-3">Hand made with Love</p>
              </a>
            </div>
          </div>
          <div className="footer_position_inner">
            <div className="footer_position_inner_right">
              <img src={ImgHM} className="py-4 pl-2 w-50 mx-auto d-block"></img>
              {/* <h3>
                <em>MINT </em>
                <br />
                 JUNE 1st 2022
              </h3> */}
              <div className="footer_position_inner_ticket">
                <a
                  href="https://opensea.io/collection/pride-pixies"
                  target="_blank"
                  className="btn mx-auto"
                >
                  Buy On Opensea
                </a>
                <br/>
                <a
                  href="/Blog"
                  target="_blank"
                  className="btn mx-auto"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="footer_position_inner visible-xs">
            <div className="footer_position_logo">
              <a href="/" target="_blank">
                <img src="img/footer_logo.png" title="" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_bottom_flex">
          <div className="footer_bottom_inner visible-xs">
            <div className="social_bottommenu">
              <ul>
                {" "}
                <li>
                  <a href="https://twitter.com/PridePixies_NFT" target="_blank">
                    <i class="fa-brands fa-twitter  IconsH"></i>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/bpCeSAMnBT" target="_blank">
                    <i class="fa-brands fa-discord IconsH"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/PridePixies/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook  IconsH"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pridepixiesnft "
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram  IconsH"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom_inner">
            <h6>© PRIDE PIXIES. ALL RIGHTS RESERVED</h6>
          </div>
          <div className="footer_bottom_inner hidden-xs ">
            <div className="social_bottommenu">
              <ul>
                <li>
                  <a href="https://twitter.com/PridePixies_NFT" target="_blank">
                    <i class="fa-brands fa-twitter  IconsH"></i>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/bpCeSAMnBT" target="_blank">
                    <i class="fa-brands fa-discord IconsH"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/PridePixies/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook  IconsH"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pridepixiesnft "
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram  IconsH"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom_inner">
            <div className="footer_bottom_ul">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>|</li>
                <li>
                  <a href="/Term" target="_blank">
                    TERMS & CONDITIONS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
