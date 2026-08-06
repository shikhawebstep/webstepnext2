import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const NewEdition = () => {
    return (
        <>
            <section className="newedition padding60">
                <div className="col-full">
                    <div className="max-1140">
                        <div className="newedition-inner">
                             <div className="center">
                             <h2 className='m4'>With The New Edition Of FunnelMates,
                             <span className="block">You’re About To Get, You’ll Have:</span></h2>
                             </div>
                             <ul>
                             <li><FaCircleCheck/>CASH To Unlock Your Choice Of Instant Funnels</li>
                             <li><FaCircleCheck/>Access To Our Templated Drag & Drop Funnel Builder</li>
                             <li><FaCircleCheck/> A License (& Passionate Audience) To Sell Them To</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewEdition
