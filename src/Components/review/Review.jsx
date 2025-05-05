import { useEffect, useState } from "react"
import Title from "../Shared/Title"
import ReviewCard from "./ReviewCard";

const Review = () => {
    const [review , setReview] = useState([]);
    useEffect(()=>{
        fetch('/review.json')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
  return (
    <div className="w-11/12 mx-auto">
        <Title head={'Testimonials'} para={'Hear from our learners as they share their journeys of transformation, success, and how ouplatform has made a difference in their lives'}></Title>


        <div className="grid grid-cols-1 md:grid-cols-3">
            {
                review && review.map(rev => <ReviewCard rev={rev}></ReviewCard>)
            }
        </div>
    </div>
  )
}

export default Review