import React from "react";

import ImgH from "../Components/Imgs/Welcome to the world.png";
import ImgH1 from "../Components/Imgs/What is this place.png";
import Gif from "../Components/Imgs/Web 3.gif";

import { LazyLoadImage } from "react-lazy-load-image-component";

import Mintbtn from "./mintbtn";

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const AboutProject = () => {
  return (
    <>
      <div className="home_what" id="intro">
        <div className="container">
          <div
            className="home_welcome"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <h3> SHOP PRIDE PIXIES</h3>   */}
            {/* <p>Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched */}
            <br />
            {/* utility! */}
            {/* </p> */}
            <Mintbtn />
            <CrossmintPayButton
              className="mx-auto btn"
              collectionTitle="Pride Pixies NFT"
              collectionDescription="Created by Taylor Diamond-Vizcaino Founder of True Dream Vision who is the first Female, LatinX, LGBTQ+ activist founder in blockchain. The world of Pride Pixies is a community made of 10,557 unique handmade and randomly Generated NFTs. They’re colorful, vibrant, loud and proud. They are the most badass, female-centric, women's empowerment, inclusive & symbolic NFTs. Pride Pixies came to True Dream Vision from childhood. They were the physical and spiritual embodiment of Rebels. Thinking about our ideal perception of women in society is what everything these Pixies are protesting. When you see a Pride Pixie you better believe she/he/they/them agrees too. True Dream Vision makes powerful NFTs to support the cause focused on female empowerment, LGBTQ+, and Human Rights activism. We are donating 5% of our profits to Human Rights Campaign Foundation (HRC.org) and well as (Ofrezco.org) to support education for underprivileged children in 3rd world countries and women in tech."
              collectionPhoto="https://lh3.googleusercontent.com/TE4XllN-flrFqJ9vpBu8b2blQVSJ5JUk-o3yPLFWwS0mooJm0fHwMmkwTDVxmvObbKECRh4YLK5OMt1q4n6nGpz-yZ24snQc2xWjnw=s1300"
              clientId="5175fa6f-bf8f-4f59-9fff-7c67960ab0f4"
              // environment="staging"
              mintConfig={{
                price: String(117 * 1),
                quantity: 1,
              }}
            />
            <a href="https://shop.pridepixies.com/" className="btn Mint py-2">
              <span>BUY MERCH</span>{" "}
              {/* <img src="img/btn_img3.png" title="" alt="" /> */}
            </a>
            {/* <a href="https://opensea.io/collection/pride-pixies"
                       className="btn"><span>Buy On Mintable</span> <img src="img/btn_img3.png" title="" alt=""/></a> */}
          </div>
          <div className="what_flex ">
            <div className="what_inner">
              <div
                className="what_inner_text visible-xs"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {/* <h3>
                <em>WELCOME TO THE </em> WORLD OF PRIDE PIXIES
              </h3> */}
              </div>
              <div
                className="what_inner_img"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <LazyLoadImage className="nmo" src={Gif} title="" alt="" />
                <div className="round_icon round_icon1">
                  <LazyLoadImage
                    className="lop"
                    src="img/round_icon1.png"
                    title=""
                    alt=""
                  />
                </div>
                <div className="round_icon round_icon2">
                  <LazyLoadImage
                    className="lop"
                    src="img/round_icon2.png"
                    title=""
                    alt=""
                  />
                </div>
                <div className="round_icon round_icon3">
                  <LazyLoadImage
                    className="lop"
                    src="img/round_icon3.png"
                    title=""
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="what_inner">
              <div
                className="what_inner_text"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <LazyLoadImage src={ImgH} className="w-100"></LazyLoadImage>

                {/* <h3 className="hidden-xs">
                <em>WELCOME TO THE</em>
                <br /> WORLD OF PRIDE PIXIES
              </h3> */}
                <p>
                  Pride Pixies came to True Dream Vision from childhood. They
                  were the physical and spiritual embodiment of Rebels. Thinking
                  about our ideal perception of women in society is what
                  everything these Pixies are protesting. When you see a Pride
                  Pixie you better believe she/he/they/them agrees too. True
                  Dream Vision makes powerful NFTS to support the cause focused
                  on female empowerment, LGBTQ+, and Human Rights activism.
                </p>
                <LazyLoadImage src={ImgH1} className="w-100"></LazyLoadImage>

                {/* <h3 className="hidden-xs">

                <em>WHAT IS</em>
                <br /> THIS PLACE?
              </h3> */}
                <h4 className="palace">
                  The world of Pride Pixies is a community made of 10,557 unique
                  hand made and randomly Generated NFTS. They’re colorful and
                  vibrant, loud and proud. Hear me out, you won’t want to miss
                  this opportunity. Alright, enough chit chat, now point those
                  gorgeous eyes towards our NFTS and see for yourself!
                </h4>
                <div className="join_btn">
                  <a
                    href="https://twitter.com/PridePixies_NFT"
                    target="_blank"
                    className="px-3 w-50 btn"
                  >
                    {" "}
                    <i class="fa-brands fa-twitter pr-2"></i>
                    <span>FOLLOW US </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProject;
