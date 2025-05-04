import React, { useEffect, useState } from 'react'
import CourseCard from './courseCard';
import { NavLink } from 'react-router-dom';

const Card = () => {
    const [course , setCourse ] = useState([]);
    useEffect(()=>{
        fetch('/card.json')
        .then(data => data.json())
        .then(res => {
            setCourse(res)
        })
    },[])
  return (
    <div className='my-10 md:my-16'>
        <h2 className='text-slate-900 text-xl md:text-4xl text-center font-semibold my-6'>Learn From The Best</h2>
        <p className='text-gray-700 md:w-7/12 mx-auto mb-10 text-center'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>


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