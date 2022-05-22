import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';


function MobileHeader() {
    return (
        <header className="mobile_header">
            <div className="container">
                <div className="mobile_header_flex">
                    <div className="mobile_header_inner">
                        <div className="mobile_header_logo">
                            <a href="/" className="heder_logo">
                                <LazyLoadImage src="img/footer_logo.gif" alt="logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="mobile_header_inner">
                        <ul>
                            
                            <li><LazyLoadImage src="img/mobile_menu.png" title="" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MobileHeader;
