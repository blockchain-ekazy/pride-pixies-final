import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import ImgH from "../Components/Imgs/What will you get.png";

const JoinCommunity = () => {
  return (
    <div className="home_community">
      <div className="container">
        <div className="home_road_map_heading ">
          <LazyLoadImage
            src={ImgH}
            className="w-100 mt-5"
            style={{ maxWidth: "600px " }}
          ></LazyLoadImage>
          {/* <h3 className="sssss">
            WHAT WILL  YOU GET?
          </h3> */}
        </div>
        <div className="home_community_flex">
          <div
            className="home_community_inner"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="home_community_text">
              <p>
                You’ll get a piece of the vision, True Dream Vision that is.
                Creating the most badass, female-centric, women’s empowerment,
                inclusive and symbolic NFTS. By supporting our human rights
                cause we are empowering women in tech with the release of a new
                NFT/DeFi marketplace called{" "}
                <a className="gre" href="https://moovmint.io ">
                  moovmint.io
                </a>{" "}
                If you hold on to a Pride Pixie for 6 months, we also reward you
                with an airdrop of 3000 $MVMNT tokens that you can sell for cash
                on decentralized exchanges. Doesn’t it feel good to know you’re
                making a difference by owning a Pride Pixie. Even Gloria Steinem
                would be proud!
              </p>
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
          <div
            className="home_community_inner"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <iframe
              className="w-100"
              height="400"
              src="https://www.youtube.com/embed/n3v3waKWEiA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
