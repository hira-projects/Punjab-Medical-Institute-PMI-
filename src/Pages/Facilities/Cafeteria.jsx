// import React from 'react'

// import Cafe from '../../components/ui/Cafe'
// import Images from'../../components/ui/Images'
// import Logo from '../../components/ui/Logo'

// function Cafeteria() {
//   return (
    
//     <>
   
//     <Logo />
//     <Cafe />
//     <Images />
    
//     </>
//   )
// }

// export default Cafeteria



import React from 'react'

import SEO from '../../components/SEO'
import Cafe from '../../components/ui/Cafe'
import Images from '../../components/ui/Images'
import Logo from '../../components/ui/Logo'

function Cafeteria() {
  return (
    <>
      <SEO
        title="Campus Cafeteria | Punjab Medical Institute, Jia Bagga"
        description="Explore the cafeteria facilities at Punjab Medical Institute (PMI), Jia Bagga, Lahore, and learn more about the campus environment and student facilities."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Facilities/cafeteria"
      />

      <Logo />
      <Cafe />
      <Images />
    </>
  )
}

export default Cafeteria