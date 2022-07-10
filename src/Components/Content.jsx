import React from 'react'
import { Outlet } from 'react-router-dom'

import Recomendacoes from './Recomendacoes'

const Content = () => {

  return (
    <>
      <section className='content active'>
        <Outlet/>
        <Recomendacoes/>
      </section>
    </>
  )
}

export default Content
