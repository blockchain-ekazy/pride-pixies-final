import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ImgH from '../Components/Imgs/More art.png'


const SpecialItems = () => {
    return (
        <div className="home_our_special">
            <div className="container-JT">
                <div className="home_benifits_heading text-center home_our_special_heading" data-aos="fade-up"
                     data-aos-duration="1000 ">
                    <LazyLoadImage src={ImgH} className='w-50 align-items-center pb-5'></LazyLoadImage>

                    {/* <h3><em>MORE</em> ART</h3> */}
                    <p>Here’s some more previews please consider sharing these with your grandma, she misses you a lot and you don’t talk to her enough.
</p>
                   
                </div>
                <div className="home_our_special_flex" role="toolbar">
                            <div className="home_our_special_inner" tabIndex="-1"
                                 role="option" aria-describedby="slick-slide00" style={{width: 282}}
                                 data-slick-index="0" aria-hidden="false">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary1.gif" title="" alt=""/>
                                </div>
                               
                            </div>
                            <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide01" style={{width: 282}} data-slick-index="1"
                                 aria-hidden="false">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary2.gif" title="" alt=""/>
                                </div>
                                
                            </div>
                            <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide02" style={{width: 282}} data-slick-index="2"
                                 aria-hidden="false">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary3.gif" title="" alt=""/>
                                </div>
                               
                            </div>
                            <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide03" style={{width: 282}} data-slick-index="3"
                                 aria-hidden="false">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary4.gif" title="" alt=""/>
                                </div>
                                
                            </div>
                            <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide04" style={{width: 282}} data-slick-index="4"
                                 aria-hidden="false">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary5.gif" title="" alt=""/>
                                </div>
                                
                            </div>
                            <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide05" style={{width: 282}} data-slick-index="5"
                                 aria-hidden="true">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary6.gif" title="" alt=""/>
                                </div>
                                
                            </div>
                            <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide06" style={{width: 282}} data-slick-index="6"
                                 aria-hidden="true">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary7.gif" title="" alt=""/>
                                </div>
                               
                            </div>
                            <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide07" style={{width: 282}} data-slick-index="7"
                                 aria-hidden="true">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary8.gif" title="" alt=""/>
                                </div>
                                
                            </div>
                            <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide08" style={{width: 282}} data-slick-index="8"
                                 aria-hidden="true">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary9.gif" title="" alt=""/>
                                </div>
                               
                            </div>
                            <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide09" style={{width: 282}} data-slick-index="9"
                                 aria-hidden="true">
                                <div className="home_our_special_img">
                                    <LazyLoadImage src="img/Legendary10.gif" title="" alt=""/>
                                </div>
                               
                            </div>
                        </div>
            </div>
        </div>
    );
}

export default SpecialItems