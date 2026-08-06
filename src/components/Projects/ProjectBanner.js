import React from 'react'
import Lists from '../Lists'
import QuoteForm from '../QuoteForm'
const ProjectBanner = () => {
  return (
    <>
    <section class="services">
    <div class="col-full">
        <div class="devider">
            <div class="col-60">
                <h2>our projects </h2>
                <p>Check out some of our favourite projects TechnoScore is dedicated to helping our clients overcome complex business problems with exceptional technological solutions, designed for efficiency. Right from conceptualization, designing, and implementation to quality engineering, data analytics,  we offer end-to-end web and mobile solutions to diverse domains.</p>
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

export default ProjectBanner
