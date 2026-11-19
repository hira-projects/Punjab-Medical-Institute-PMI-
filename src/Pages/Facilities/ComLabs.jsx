// import React from 'react'

// import CmLab from '../../components/ui/CmLab'
// import CmCard from '../../components/ui/CmCard'
// import ContentBba from '../../components/ui/ContentBba'
// import Logo from '../../components/ui/Logo'

// function ComLabs() {
//   return (
//     <>
    
//     <Logo />
//     <CmLab />
//     <CmCard />
//     <ContentBba />
    
//     </>
//   )
// }

// export default ComLabs



import React from 'react'

import SEO from '../../components/SEO'
import CmLab from '../../components/ui/CmLab'
import CmCard from '../../components/ui/CmCard'
import ContentBba from '../../components/ui/ContentBba'
import Logo from '../../components/ui/Logo'

function ComLabs() {
  return (
    <>
      <SEO
        title="Computer Labs | Punjab Medical Institute, Jia Bagga"
        description="Explore the computer laboratory facilities at Punjab Medical Institute (PMI), Jia Bagga, Lahore, and learn about the campus technology and practical learning environment."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Facilities/cmlabs"
      />

      <Logo />
      <CmLab />
      <CmCard />
      <ContentBba />
    </>
  )
}

export default ComLabs