import React, { useEffect, useState } from 'react'
import CourseCard from './courseCard';
import { NavLink } from 'react-router-dom';
import Title from '../Shared/Title'
import useCourse from '../Hooks/useCourse';

const Card = () => {
    // const [course , setCourse ] = useState([]);
    // useEffect(()=>{
    //     fetch('/card.json')
    //     .then(data => data.json())
    //     .then(res => {
    //         setCourse(res)
    //     })
    // },[])

    const [course] = useCourse([]);
  return (
    <div className='my-10 md:my-16'>

             <Title head={'Learining From The Best'} para={'Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results'}></Title>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
                course && course.slice(0,4).map(cor => <CourseCard cor={cor}></CourseCard>)
            }
        </div>
        <div className='flex items-center justify-center my-4 mt-10 '>
            <NavLink to={'/allcard'}>
            <button className='btn btn-primary shadow-lg'>Show all Course</button>
            </NavLink>
        </div>
    </div>
  )
}

export default Card