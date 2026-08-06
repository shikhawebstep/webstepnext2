import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const BeenListing = () => {
    return (
        <>
            <section className="beenlist">
                <div className="col-full">
                    <div className="beenlist-inner max-1140">
                        <div className="center">
                            <h2>In Fact, ALL The Funnels In FunnelMates <span className="block">Have Been Created By Fellow Members.</span></h2>
                            <button className="bg-blue m4">They’ve Been Created By:</button>
                            <ul className='text-left d-flex m4'>
                                <li><span><FaCircleCheck /></span>High level product owners (or their staff members).</li>
                                <li><span><FaCircleCheck /></span>First time product creators wanting to get more affiliates</li>
                                <li><span><FaCircleCheck /></span>People wanting to build massive lists by leveraging other people’s work</li>
                                <li><span><FaCircleCheck /></span>Entrepreneurs who’ve bought (too many) lead magnet type offers in the past, often with private label or reseller rights...</li>
                                <li><span><FaCircleCheck /></span>Marketers who make funnels for themselves and make them available for others as an extra lead generation and income stream.</li>
                                <li><span><FaCircleCheck /></span>Affiliate marketers wanting a great funnel to promote the latest hot offers</li>
                                <li><span><FaCircleCheck /></span>People who just love making funnels (and getting paid to do it!)</li>
                                <li><span><FaCircleCheck /></span>People just like you who follow our templated, step by step funnel building process to create these powerful lead magnets for all kinds of situations… because:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BeenListing
