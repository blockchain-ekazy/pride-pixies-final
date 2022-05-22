import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ImgH from '../Components/Imgs/Pride pixies.png'


const WhatIsThisProjectAvatar = () => {
    return (
        <div className="home_bored_bunny">
            <div className="home_bored_bunny_max">
                <div className="home_bored_bunny_flex">
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            <LazyLoadImage src="img/img3.jpg" title="" alt="" width="100%" className="hover_hide"/>
                                <LazyLoadImage src="img/mg5.jpg" title="" alt="" width="100%" className="hover_show"/>
                        </div>
                    </div>
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            <LazyLoadImage src="img/img4.jpg" title="" alt="" width="100%" className="hover_hide"/>
                                <LazyLoadImage src="img/img6.jpg" title="" alt="" width="100%" className="hover_show"/>
                        </div>
                    </div>
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            <LazyLoadImage src="img/mg5.jpg" title="" alt="" width="100%" className="hover_hide"/>
                                <LazyLoadImage src="img/img3.jpg" title="" alt="" width="100%" className="hover_show"/>
                        </div>
                    </div>
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            <LazyLoadImage src="img/img6.jpg" title="" alt="" width="100%" className="hover_hide"/>
                                <LazyLoadImage src="img/img4.jpg" title="" alt="" width="100%" className="hover_show"/>
                        </div>
                    </div>
                </div>
                <div className="home_bored_text" data-aos="fade-up" data-aos-duration="1000">
                <LazyLoadImage src={ImgH} className='w-50'></LazyLoadImage>
                    {/* <h3>PRIDE PIXIES</h3> */}
                </div>
            </div>
        </div>
    );
}
export default WhatIsThisProjectAvatar;

