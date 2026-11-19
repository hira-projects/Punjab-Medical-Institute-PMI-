// import React from 'react'

// import Course from '../../components/ui/Course'

// import Logo from '../../components/ui/Logo'
// import Training from '../../components/ui/Training'
// import Timing from '../../components/ui/Timing'
// function ShortCourses() {
//   return (
//    <>
   
//    <Logo />
//    <Course />
//    <Training />
//    <Timing />
   
//    </>
//   )
// }
// export default ShortCourses



import React from 'react'

import SEO from '../../components/SEO'
import Course from '../../components/ui/Course'
import Logo from '../../components/ui/Logo'
import Training from '../../components/ui/Training'
import Timing from '../../components/ui/Timing'

function ShortCourses() {
  return (
    <>
      <SEO
        title="Professional Short Courses in Jia Bagga, Lahore | PMI"
        description="Explore professional short courses at Punjab Medical Institute (PMI), Jia Bagga, Lahore. Discover practical learning opportunities in computer skills, graphic design, freelancing and digital marketing."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Programs/short-courses"
      />

      <Logo />
      <Course />
      <Training />
      <Timing />
    </>
  )
}

export default ShortCourses