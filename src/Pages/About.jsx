
// import React from 'react'

// import Logo from '../components/ui/Logo'

// import Body from '../components/ui/Body'
// import Features from '../components/ui/Features'
// import Department from '../components/ui/Department'



// function About() {
//   return (
//     <>
    
//     <Logo />
//     <Body />
//     <Department />
//     <Features />
   
//     </>
//   )
// }

// export default About



import React from 'react'

import SEO from '../components/SEO'
import Logo from '../components/ui/Logo'
import Body from '../components/ui/Body'
import Features from '../components/ui/Features'
import Department from '../components/ui/Department'

function About() {
  return (
    <>
      <SEO
        title="About Punjab Medical Institute (PMI) | Jia Bagga, Lahore"
        description="Learn about Punjab Medical Institute (PMI), Jia Bagga, Lahore, its educational programs, academic departments, learning facilities and commitment to student education."
        canonical="https://punjab-medical-institute-pmi.vercel.app/About"
      />

      <Logo />
      <Body />
      <Department />
      <Features />
    </>
  )
}

export default About