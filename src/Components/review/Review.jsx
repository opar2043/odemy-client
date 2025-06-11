import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useUser } from "@clerk/clerk-react";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Review = () => {
  const [review, setReview] = useState([]);
  const [role, setRole] = useState("Developer");
  const { user } = useUser();
  console.log(user);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  const axiosSecure = useAxios();

  function handleReview(e) {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = parseFloat(form.rating.value);
    const image = user.imageUrl;
    const name = user.fullName;
    const rvw = {
      review,
      rating,
      position: role,
      image,
      name,
    };

    axiosSecure
      .post("/review", rvw)
      .then((res) => {
        console.log(res.data);
        toast.success("Review  Added");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something Went Wrong");
      });

    form.reset();
  }

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
          <button
            className="btn bg-color"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add Review
          </button>
          <NavLink to={"/learn"}>
            <button className="btn text-color">Learn More </button>
          </NavLink>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative w-[90%] sm:w-[80%] md:w-[35%] bg-white rounded-lg p-4">
          {/* Close Button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          {/* Modal Content */}
          <h3 className="font-bold text-lg">Submit Project Review</h3>

          {/* Review Form */}
          <form method="dialog" onSubmit={handleReview}>
            {/* Role Selection */}
            <div className="mt-4">
              <label
                htmlFor="role"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Select Your Role
              </label>
              <select
                name="role"
                id="role"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1 focus:outline-none focus:border-[#3B9DF8]"
                required
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">-- Select Role --</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Tester">Tester</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
              </select>
            </div>

            {/* Rating Input */}
            <div className="mt-4">
              <label
                htmlFor="rating"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Rating (1 to 5)
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="1"
                max="5"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1 focus:outline-none focus:border-[#3B9DF8]"
                required
              />
            </div>

            {/* Review Textarea */}
            <div className="mt-4">
              <label
                htmlFor="review"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Review
              </label>
              <textarea
                name="review"
                id="review"
                rows="4"
                placeholder="Write your feedback here..."
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1 focus:outline-none focus:border-[#3B9DF8]"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="py-2 px-4 w-full bg-primary text-white rounded-md"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Review;
