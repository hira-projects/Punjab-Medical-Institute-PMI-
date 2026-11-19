// import React from 'react'
// import Lib from '../../components/ui/Lib'

// import Logo from '../../components/ui/Logo'

// function Library() {
//   return (
//     <>
    
//     <Logo />
//     <Lib />
    
//     </>
//   )
// }

// export default Library




import React from 'react'

import SEO from '../../components/SEO'
import Lib from '../../components/ui/Lib'
import Logo from '../../components/ui/Logo'

function Library() {
  return (
    <>
      <SEO
        title="Campus Library | Punjab Medical Institute, Jia Bagga"
        description="Explore the library facilities at Punjab Medical Institute (PMI), Jia Bagga, Lahore, and learn about the academic resources available to support students' learning and studies."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Facilities/library"
      />

      <Logo />
      <Lib />
    </>
  )
}

export default Library