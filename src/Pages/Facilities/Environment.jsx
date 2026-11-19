// import React from 'react'

// import Logo from '../../components/ui/Logo'
// import Enviro from '../../components/ui/Enviro'

// function Environment() {
//   return (
    
//     <>
    
//     <Logo />
//     <Enviro />
  
//     </>
//   )
// }

// export default Environment



import React from 'react'

import SEO from '../../components/SEO'
import Logo from '../../components/ui/Logo'
import Enviro from '../../components/ui/Enviro'

function Environment() {
  return (
    <>
      <SEO
        title="Campus Environment | Punjab Medical Institute, Jia Bagga"
        description="Discover the campus environment at Punjab Medical Institute (PMI), Jia Bagga, Lahore. Learn about the institute's educational setting and student learning environment."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Facilities/Environment"
      />

      <Logo />
      <Enviro />
    </>
  )
}

export default Environment