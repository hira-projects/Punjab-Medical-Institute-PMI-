// import React from 'react'

// import Ground from '../../components/ui/Ground'
// import SportImg from '../../components/ui/SportImg'
// import Logo from '../../components/ui/Logo'

// function Sports() {
//   return (
    
//     <>
    
//     <Logo />
//     <Ground />
//     <SportImg />
//     </>
//   )
// }

// export default Sports


import React from 'react'

import SEO from '../../components/SEO'
import Ground from '../../components/ui/Ground'
import SportImg from '../../components/ui/SportImg'
import Logo from '../../components/ui/Logo'

function Sports() {
  return (
    <>
      <SEO
        title="Sports Facilities | Punjab Medical Institute, Jia Bagga"
        description="Explore the sports and recreational facilities at Punjab Medical Institute (PMI), Jia Bagga, Lahore, and discover the campus environment for student activities."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Facilities/sports"
      />

      <Logo />
      <Ground />
      <SportImg />
    </>
  )
}

export default Sports