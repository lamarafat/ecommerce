import React from 'react'
import Testemonial from '../../../../component/user/Testemonial'
import Follow from '../../../../component/user/Follow'
import Peaky from '../../../../component/user/peaky'
import Header from '../../../../component/user/Header'
import Categories from '../../../../component/user/Categories'

export default function Home() {
  return (
    <>
        <Header />
        <Categories />
        <Peaky />
        <Follow />
        <Testemonial />
    </>
  )
}
