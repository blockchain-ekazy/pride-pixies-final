import React from "react";
import ImgH from "../Components/Imgs/MainBlogImg.gif";

import BoxImg1 from "../Components/Imgs/img-1.webp";
import BoxImg2 from "../Components/Imgs/Img-2.jpg";
import BoxImg3 from "../Components/Imgs/Img-3.jpg";
import BoxImg4 from "../Components/Imgs/img-4.png";
import BoxImg5 from "../Components/Imgs/Web 3.gif";
import BoxImg8 from "../Components/Imgs/Img-8.jpeg";

export default function Blog() {
  return (
    <div className="container-fluid">
      {/* <img src={ImgH}></img> */}
      <div className="home_road_map_heading BlogH">
        <h3>
          <em className="">Blog</em>
        </h3>
      </div>
      <div className="container p-5 my-5">
        <div className="row">
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://nftfactory.buzzsprout.com/1953668/10629253"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg2}></img>
                <div className="text-center ">
                  <small className="text-white px-3">
                  May 16, 2022 
                </small>
                </div>
                <h3 className="text-white px-3 py-1"> The NFT Factory</h3>
                <p className="BoxTxt px-3 py-1">
                  In this week's slightly extended special edition, we meet
                  Taylor Diamond-Vizcaino, Genna Rupelli-Vizcaino and Donald
                  Vizcaino - a very special co-founding family behind the Pride
                  Pixies.
                </p>{" "}
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://finance.yahoo.com/news/defi-platform-nft-collection-focuses-110000329.html?guccounter=1"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg3}></img>
                <div className="text-center">
                  <small className="text-white ">May 12, 2022</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  New DeFi Platform and NFT Collection
                </h3>
                <p className="BoxTxt px-3 py-1">
                  Taylor is a self-taught artist who gravitated towards a career
                  as a graphic designer. Taylor chose to utilize her abilities
                  and creative talent to change the world.
                </p>{" "}
              </div>
            </a>
          </div>{" "}
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://www.marketwatch.com/press-release/artist-responds-to-floridas-dont-say-gay-bill-with-new-nft-collection-2022-05-03?mod=search_headline"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg1}></img>
                <div className="text-center">
                  <small className="text-white px-3">May 3, 2022</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  Artist Responds to Florida's "Don't Say Gay" Bill With New NFT
                  Collection{" "}
                </h3>
                <p className="BoxTxt px-3 py-1">
                  Orlando, FL, USA — In March of 2022, Florida Gov. Ron Desantis
                  signed House bill 1577 creating considerable controversy.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://www.digitaljournal.com/pr/pride-pixies-highlights-inclusivity-and-representation-in-the-nft-community"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg4}></img>
                <div className="text-center">
                  <small className="text-white px-3">May 18, 2022</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  Pride Pixies highlights inclusivity in the NFT market
                </h3>
                <p className="BoxTxt px-3 py-1">
                  As someone who identifies as LGBQT+, Taylor felt the need to
                  have a collection representative of the communities she’s a
                  part of. 
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://cryptoyers.com/pride-pixies-nft-the-response-of-the-art-community-to-the-dont-say-gay-bill/"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg2}></img>
                <div className="text-center">
                  <small className="text-white px-3">April 26, 2022</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  Pride Pixies NFT: The Response of the Art Community to the
                  “Don’t Say Gay” Bill
                </h3>
                <p className="BoxTxt px-3 py-1">
                  Many new blockchain projects founded and led by women are
                  entering the blockchain industry, which is living a clear
                  transformation
                </p>{" "}
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://coinducted.com/pride-pixies-shows-that-change-is-possible-with-nfts/"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg3}></img>
                <div className="text-center">
                  <small className="text-white px-3">May 1, 2022</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  Pride Pixies Shows that Change is Possible with NFTs
                </h3>
                <p className="BoxTxt px-3 py-1">
                  In the case of artists, non-fungible tokens are essential
                  since they ensure the validity and uniqueness of digital
                  representations of their creative works on the blockchain.
                </p>{" "}
              </div>
            </a>
          </div>{" "}
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://www.bignewsnetwork.com/news/272541923/pride-pixies-shows-that-change-is-possible-with-nfts"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg4}></img>
                <div className="text-center">
                  <small className="text-white px-3">7th May 2022,</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  Vision of Pride Pixies with NFTs{" "}
                </h3>
                <p className="BoxTxt px-3 py-1">
                  We want to see Pride Pixies changing a future where women are
                  truly equal to men and have access to all of life's
                  opportunities. We believe in an open world where no one has to
                  hide who they are.
                </p>{" "}
              </div>
            </a>
          </div>{" "}
          <div className="col-md-3">
            <a
              target={"_blank"}
              className="Anc"
              href="https://cryptoddy.com/make-way-for-inclusiveness-and-equality-the-pride-pixies-nft-collection/"
            >
              <div className=" BoxSha">
                <img className="boxImg" src={BoxImg8}></img>
                <div className="text-center">
                  <small className="text-white px-3">May 9, 2022</small>
                </div>
                <h3 className="text-white px-3 py-1">
                  {" "}
                  Make Way for Inclusiveness and Equality the Pride Pixies NFT
                  Collection{" "}
                </h3>
                <p className="BoxTxt px-3 py-1">
                  The fact that there are so few women in attendance at crypto
                  conferences is a major talking point. Though touted as a new
                  world of Web3 for everyone.
                </p>{" "}
              </div>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
