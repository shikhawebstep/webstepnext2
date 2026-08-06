import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const Buisness = () => {
    return (
        <section className="bisness-sec">
            <div className="col-full">
                <div className="buisness-inner">
                    <h2>Businesses Capturing Leads Make More Money<br/> Than Businesses That Don’t</h2>
                    <h4>No Two Ways About It… If You’re Not Building A List You’re Losing Sales… </h4>
                    <button className="btn-pink bg-pink">In Fact … On Average, Out Of Every 100 People Who Visit On Your Pages</button>
                    <div className="percentage-list">
                    <ul>
                    <li><FaCircleCheck/>3% are ready to buy</li>
                    <li><FaCircleCheck/>30% don’t think they’re interested</li>
                    <li><FaCircleCheck/>6-7% are open to the idea</li>
                    <li><FaCircleCheck/>30% KNOW they’re not interested</li>
                    <li><FaCircleCheck/>6-7% are open to the idea</li>
                    </ul>
                    </div>
                    <h4>Long Story Short,  97% Of People Just Aren’t Ready To Buy From You Right Now…</h4>
                </div>
            </div>
        </section>
    )
}

export default Buisness
