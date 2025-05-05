import React from 'react'
import Banner from './Banner'
import Learner from '../Learner/Learner'
import Card from '../Card/Card'
import Review from '../review/Review'

const Home = () => {
  return (
    <div className='md:w-11/12 mx-auto'>
        <Banner></Banner>
        <Learner></Learner>
        <Card></Card>
        <Review></Review>
    </div>
  )
}

export default Home