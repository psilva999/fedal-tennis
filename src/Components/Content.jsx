import React from 'react'
import { Outlet } from 'react-router-dom'
import { federerContent, gugaContent, nadalContent } from './Events/tennisPlayerContent'

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
