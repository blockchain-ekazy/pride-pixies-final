import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ImgH from "../Components/Imgs/opensea-seeklogo.com.svg";

function MainHeader() {
  return (
    <>
      <header className="header_main desktop_header">
        <div className="container">
          <div className="header_inner">
            <div className="header_flex">
              <div className="header_menu header_menu1">
                <ul>
                  <li>
                    <a href="/#intro">PRIDE PIXIES</a>
                  </li>
                  <li>
                    <a href="/#roadmap">ROADMAP</a>
                  </li>
                </ul>
              </div>
              <div className="header_logo">
                <a href="/" className="heder_logo">
                  <img className="hand" src="img/footer_logo.gif" alt="logo" />
                </a>
              </div>
              <div className="header_menu header_menu2">
                <ul>
                  <li>
                    <a href="/#benefits" className="mr-2">
                      ABOUT US
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/#faq" className="mr-4">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social_menu">
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
                <li>
                  <a
                    href="https://opensea.io/collection/pride-pixies"
                    target="_blank"
                  >
                    <LazyLoadImage
                      src={ImgH}
                      className="seadbtn w-50 px-0"
                      title=""
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
