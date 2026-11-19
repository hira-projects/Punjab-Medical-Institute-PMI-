
// import React from 'react'

// import Logo from '../../components/ui/Logo'
// import Table from '../../components/ui/Table'
// import Medi from '../../components/ui/Medi'
// import CardExpla from '../../components/ui/CardExpla'
// import Requirements from '../../components/ui/Requirements'
// function MedicalDiploma() {
//   return (
//     <>
    
//     <Logo />   
//     <Table />
//     <Medi />
//     <CardExpla />
// <Requirements />
    
//     </>
//   )
// }

// export default MedicalDiploma



import React from 'react'

import SEO from '../../components/SEO'
import Logo from '../../components/ui/Logo'
import Table from '../../components/ui/Table'
import Medi from '../../components/ui/Medi'
import CardExpla from '../../components/ui/CardExpla'
import Requirements from '../../components/ui/Requirements'

function MedicalDiploma() {
  return (
    <>
      <SEO
        title="Medical Diploma Programs in Jia Bagga, Lahore | PMI"
        description="Explore medical diploma programs at Punjab Medical Institute (PMI), Jia Bagga, Lahore. Learn about available healthcare courses, admission requirements and professional training opportunities."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Programs/diploma"
      />

      <Logo />
      <Table />
      <Medi />
      <CardExpla />
      <Requirements />
    </>
  )
}

export default MedicalDiploma
