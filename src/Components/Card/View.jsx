import React from 'react'
import { useParams } from 'react-router-dom'
import useCourse from '../Hooks/useCourse';
import ViewCard from './viewCard';

const View = () => {
    const {id }= useParams();
    const [course] = useCourse([])
    const myCourse = course.find(cor => cor._id == id);
    console.log(myCourse);
  return (
    <div>
      <ViewCard myCourse={myCourse}></ViewCard>
    </div>
  )
}

export default View