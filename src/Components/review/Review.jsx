import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-6 md:mt-16">
      <Title
        head={"Testimonials"}
        para={
          "Hear from our learners as they share their journeys of transformation, success, and how ouplatform has made a difference in their lives"
        }
      ></Title>

      {/* Sweipwer */}
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {review &&
          review.map((rev) => (
            <SwiperSlide>
              <ReviewCard rev={rev}></ReviewCard>
            </SwiperSlide>
          ))}
        {/* </div> */}
      </Swiper>

      <div className="my-8 md:my-20 ">
        <Title
          head={"Learn anything, anytime, anywhere"}
          para={
            "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea"
          }
        ></Title>
        <div className="flex justify-center items-center gap-4">
          <button className="btn btn-primary">Add Review</button>
          <button className="btn">Learn More </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
