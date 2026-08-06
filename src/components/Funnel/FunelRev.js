import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'
import Image from 'next/image';
import { assetImage } from "@/lib/assets";
const user = assetImage("review-user.png");

const FunelRev = () => {
    return (
        <div className="funnel-review-inner">
            <div className="review-inner">
                <div className="quote"><FaQuoteLeft /></div>
                <div className="white-shadow-box">
                    <p>“Karan from Webstep Solutions saved the day for us! What began as some final finishes before launching to include membership account registration pages set up, adding icons and linking our social media accounts with the site, and some testing developed into a significant list of issues that Karan was able to discover and provide a various array of fixes including writing additional code, installing the appropriate plugins and a vast amount of troubleshooting and testing. Karan possesses an immense level of skills, when he says he will work, he does. When he says he will be finished, he meets the deadline. Karan exceeded our expectations. 10 stars!”</p>
                    <div className="user-info ">
                        <div className="user-img" style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg, #059669, #34d399)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 14 }}>MS</div>
                        <div className="user-infos infos">
                            <h6>Magnus Stihl</h6>
                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        </div>
                    </div>
                </div>
                <div className="quote right"><FaQuoteRight /></div>
            </div>
           
        </div>
    )
}

export default FunelRev



