import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import ImgH from "../Components/Imgs/image18.gif";
import ImgHA from "../Components/Imgs/image17.gif";
import HImg from "../Components/Imgs/Meet the team.png";
import DImg from "../Components/Imgs/247.gif";

const MeetTeam = () => {
  return (
    <div className="home_meet_team" id="team">
      <div className=" container-fluid">
        <div
          className="home_road_map_heading text-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <LazyLoadImage src={HImg} className="w-50 pt-4"></LazyLoadImage>
          {/* <h3><em>MEET </em> THE TEAM</h3> */}
          <p>The ones who are making everything happen.</p>
        </div>
        <div className="home_meet_team_slider">
          <div
            className="home_meet_team_inner slick-slide slick-active"
            tabIndex="-1"
            role="option"
            aria-describedby="slick-slide01"
            style={{ width: 282 }}
            data-slick-index="1"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <LazyLoadImage src={ImgH} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text text-center">
              <h3>Taylor Diamond Vizcaino </h3>
              <h4>Founder, Creator & Visionary </h4>
              <a href="https://twitter.com/taylorangeladv" target="_blank">
                <i className="fab fa-twitter IconsH mt-4"></i>
              </a>
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="0"
            role="option"
            aria-describedby="slick-slide02"
            style={{ width: 282 }}
            data-slick-index="2"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <LazyLoadImage src={ImgHA} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text text-center">
              <h3>Genevieve Rupelli</h3>
              <h4>Founder, Boss Lady</h4>
              <a href="https://twitter.com/Rupellig" target="_blank">
                <i className="fab fa-twitter IconsH mt-4"></i>
              </a>
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="2"
            role="option"
            aria-describedby="slick-slide03"
            style={{ width: 282 }}
            data-slick-index="3"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <LazyLoadImage
                src="img/Legendary6.gif"
                title=""
                alt=""
                width="100%"
              />
            </div>
            <div className="home_meet_team_text text-center">
              <h3>Muhammad Sabir Junaid </h3>
              <h4>Founder, Chief Dev & Boss Man </h4>
              <a href="https://twitter.com/Ekazy_" target="_blank">
                <i className="fab fa-twitter IconsH mt-4"></i>
              </a>
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="3"
            role="option"
            aria-describedby="slick-slide04"
            style={{ width: 282 }}
            data-slick-index="4"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <LazyLoadImage src={DImg} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text text-center">
              <h3>Donald Vizcaino</h3>
              <h4>Founder, Boss Man </h4>
              <a href="https://twitter.com/vpgfintechdon" target="_blank">
                <i className="fab fa-twitter IconsH mt-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetTeam;
