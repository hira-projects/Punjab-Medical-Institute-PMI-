

// import React from 'react'

// import Logo from '../components/ui/Logo'
// import Cont from '../components/ui/Cont'
// import Docu from '../components/ui/Docu'
// import Documents from '../components/ui/Documents'
// function Contact() {
//   return (
//     <>

//     <Logo />
//     <Cont />
//     <Docu />
//     <Documents />
   
//     </>
//   )
// }

// export default Contact


import React from 'react'

import SEO from '../components/SEO'
import Logo from '../components/ui/Logo'
import Cont from '../components/ui/Cont'
import Docu from '../components/ui/Docu'
import Documents from '../components/ui/Documents'

function Contact() {
  return (
    <>
      <SEO
        title="Contact Punjab Medical Institute (PMI) | Jia Bagga, Lahore"
        description="Contact Punjab Medical Institute (PMI), Jia Bagga, Lahore, for admission inquiries, medical and IT programs, course information and other educational details."
        canonical="https://punjab-medical-institute-pmi.vercel.app/Contact"
      />

      <Logo />
      <Cont />
      <Docu />
      <Documents />
    </>
  )
}

export default Contact