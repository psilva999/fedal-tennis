import React from 'react'
import { Outlet } from 'react-router-dom'

import Tenistas from './Tenistas'
import Recomendacoes from './Recomendacoes'

const Content = () => {
  return (
    <>
      <Tenistas/>

      <section className='content active'>
        <Outlet/>

        <Recomendacoes/>
      </section>
    </>
  )
}

export default Content
