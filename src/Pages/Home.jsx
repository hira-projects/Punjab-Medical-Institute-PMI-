
// import React from 'react'
// import Wait from '../components/ui/Wait'
// import Logo from '../components/ui/Logo'
// import Hero from '../components/ui/Hero'
// import HeroPro from '../components/ui/HeroPro'
// import HeroImage from '../components/ui/HeroImage'
// function Home() {
//   return (
//     <>
 
    
//     <Logo />
//      <Wait /> 
//      <Hero />
//       <HeroPro /> 
//       <HeroImage />
//     </>
   
//   )
// }

// export default Home


import React from 'react'

import SEO from '../components/SEO'
import Wait from '../components/ui/Wait'
import Logo from '../components/ui/Logo'
import Hero from '../components/ui/Hero'
import HeroPro from '../components/ui/HeroPro'
import HeroImage from '../components/ui/HeroImage'

function Home() {
  return (
    <>
      <SEO
        title="Punjab Medical Institute (PMI) | Medical & IT Education in Jia Bagga"
        description="Explore Punjab Medical Institute (PMI), Jia Bagga, Lahore, offering medical diploma programs, IT education, business studies and professional courses."
        canonical="https://punjab-medical-institute-pmi.vercel.app/"
      />

      <Logo />
      <Wait />
      <Hero />
      <HeroPro />
      <HeroImage />
    </>
  )
}

export default Home
