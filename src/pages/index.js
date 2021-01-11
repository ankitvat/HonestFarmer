import React from 'react'
import Header from '../components/header.js'
import Banner from '../components/banner.js'
import Cards from '../components/cards.js'
import Features from '../components/features.js'
import Stories from '../components/stories.js'
import Footer from '../components/footer.js'

const IndexPage = () => (
  <div className="layout">
    <Header />
    <Banner />
    <Cards />

    <Features />
    <Stories />
    <Footer />
  </div>
)

export default IndexPage
