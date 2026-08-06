import React from 'react'
import QuoteForm from '../QuoteForm'
import Lists from '../Lists'

const TeamBanner = () => {
  return (
   <>
   <section class="services">
   <div class="col-full">
       <div class="devider">
           <div class="col-60">
               <h2>team</h2>
               <p>Twenty years in business has yielded hundreds of client partnerships, each with their own challenges, each uniquely rewarding. TechnoScore is dedicated to helping our clients overcome complex business problems with exceptional technological solutions, designed for efficiency. Right from conceptualization, designing, and implementation to quality engineering,.</p>
              <Lists/>
           </div>
           <div class="col-40">
               <QuoteForm/>
           </div>
       </div>
   </div>
</section>
   </>
  )
}

export default TeamBanner
