import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import ImgH from "../Components/Imgs/Whats so special.png";

const ProjectBenefits = () => {
  return (
    <div className="home_benifits" id="benefits">
      <div className="container">
        <div
          className="home_benifits_heading"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <LazyLoadImage src={ImgH} className="w-100"></LazyLoadImage>

          {/* <h3>
            <em>WHAT’S SO SPECIAL ABOUT</em> TRUE DREAM VISION?
          </h3> */}
          <p>
            We are dedicated to promoting a community where individuals from all
            over the world can identify and express themselves freely. Utilizing
            NFTS as an example of inclusivity and diversity in society. True
            Dream Vision itself was founded by the first female Latinx, LGBTQ+
            activist, and founder of a block chain company, breaking the glass
            ceiling where most are run by only men. She takes pride in what she
            does through her art, and the Pride Pixies are the first collection
            to show it. Feel free to join our{" "}
            <a
              className="text-white"
              target="_blank"
              href="https://twitter.com/PridePixiesNFT "
            >
              twitter
            </a>{" "}
            for resources, community dialog, NFT updates, and FAQ’s.
          </p>
        </div>
        <div className="home_benifits_img">
          <div className="homeee_benifits_img_div hidden-xs">
            <LazyLoadImage src="img/img8.png" title="" alt="" />
          </div>
          <div
            className="benifits_position benifits_position1"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="benifits_position_box">
              <LazyLoadImage
                className="circle"
                src="img/icon1.gif"
                title=""
                alt=""
              />
              <h3>HOW TO BUY</h3>
            </div>
            <p>
              Pride Pixies will be minting starting June 1st, 2022 (PRIDE Month!
              Yay!) but don’t worry, when it ends you can still get one on
              Opensea or Moovmint. While our Pride Pixies may be art, they’re
              worth so much more. Always remember, the price for NFTS may go up
              or down.
            </p>
          </div>
          <div
            className="benifits_position benifits_position2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="benifits_position_box">
              <LazyLoadImage
                className="circle"
                src="img/icon2.gif"
                title=""
                alt=""
              />
              <h3>MORE DETAILS</h3>
            </div>
            <p>
              If you got this far and you’re reading this, you’re probably my
              mom. If you’re not my mom, you’re probably intrigued and moved by
              our cause. Anyway, here are more details: Each Pride Pixie NFT is
              a combination of hand made designs and auto generated from over
              100 unique attributes hand drawn by True Dream Vision.
            </p>
          </div>

          <div
            className="benifits_position benifits_position4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="benifits_position_box">
              <LazyLoadImage
                className="circle"
                src="img/icon4.gif"
                title=""
                alt=""
              />
              <h3>ATTRIBUTES LIST</h3>
            </div>
            <ul className="text-white listo">
              <li>✯ Epic Backgrounds</li>
              <li>✯ Important Topics and Causes</li>
              <li>✯ Variety of Skin Tones</li>
              <li>
                ✯ Inclusive Cultural and Diverse <br /> features
              </li>
              <li>✯ Eccentric and Fashionable Clothing</li>
              <p>
                Rarity: Some Attributes are rarer than others, making some Pride
                Pixies NFTs super scarce and special.
              </p>
              <li>
                ✯ Symbolic/Humorous Artistic <br /> references that you can
                relate to if you’re a member of the LGBTQ+ <br />
                community
              </li>
              <li>✯ Female and gender-neutral pixies that rock!</li>
            </ul>
          </div>
          <div
            className="benifits_position benifits_position5 pt-5 mt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="benifits_position_box ">
              <LazyLoadImage
                className="circle"
                src="img/icon5.gif"
                title=""
                alt=""
              />
              <h3>TECH STUFF</h3>
            </div>
            <ul className="text-white listo">
              <li>
                ✯ Polygon Matic because True Dream Vision doesn’t believe in
                high gas fees.
              </li>
              <li>✯ ERC 721 because why not?</li>
              <li>
                ✯ High Def 1500 x 1500 px images so that way you have to shrink
                them before you use them.
              </li>
              <li>
                ✯{" "}
                <a
                  href="https://polygonscan.com/address/0x91E416B22191aa658c2e5D77E8a278f47d103d4f"
                  target="_blank"
                  className=""
                >
                  VERIFIED CONTRACT
                </a>
                ,... So you can pretend you DYOR
              </li>
            </ul>
          </div>

          {/* <div className="arrow_position arrow_position1 hidden-xs">
                        <img src="img/sep5.png" title="" alt=""/>
                    </div>
                    <div className="arrow_position arrow_position2 hidden-xs">
                        <img src="img/sep2.png" title="" alt=""/>
                    </div> */}

          {/* <div className="arrow_position arrow_position3 hidden-xs">
                        <img src="img/sep3.png" title="" alt=""/>
                    </div> */}
          {/* <div className="arrow_position arrow_position4 hidden-xs">
                        <img src="img/sep4.png" title="" alt=""/>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectBenefits;
