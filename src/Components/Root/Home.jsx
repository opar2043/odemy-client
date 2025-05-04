import React from 'react'
import Banner from './Banner'
import Learner from '../Learner/Learner'
import Card from '../Card/Card'

const Home = () => {
  return (
    <div className='md:w-11/12 mx-auto'>
        <Banner></Banner>
        <Learner></Learner>
        <Card></Card>
    </div>
  )
}

export default Home