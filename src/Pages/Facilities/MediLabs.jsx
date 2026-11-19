// import React from 'react'

// import Labs from '../../components/ui/Labs'
// import Logo from '../../components/ui/Logo'
// import MediCard from '../../components/ui/MediCard'
// function MediLabs() {
//   return (
    
//     <>
   
//     <Logo />
//     <Labs />
//     <MediCard />
    
//     </>
//   )
// }

// export default MediLabs


import React from 'react'

import SEO from '../../components/SEO'
import Labs from '../../components/ui/Labs'
import Logo from '../../components/ui/Logo'
import MediCard from '../../components/ui/MediCard'

function MediLabs() {
  return (
    <>
      <SEO
        title="Medical Laboratories | Punjab Medical Institute, Jia Bagga"
        description="Explore the medical laboratory facilities at Punjab Medical Institute (PMI), Jia Bagga, Lahore, and learn about practical learning opportunities for healthcare students."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Facilities/labs"
      />

      <Logo />
      <Labs />
      <MediCard />
    </>
  )
}

export default MediLabs