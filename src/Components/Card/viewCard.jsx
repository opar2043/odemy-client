import { useState, useEffect } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

const ViewCard = ({ myCourse }) => {
  const {
    title = "Course Title",
    description = "This is a detailed course description with all important highlights of the content.",
    discount = 20,
    price = 80,
    originalPrice = 100,
    benefit = ["Lifetime access", "Certificate included", "Beginner friendly"],
    rating = 4,
    email = "instructor@example.com",
    image = "https://via.placeholder.com/600x400",
  } = myCourse || {};

  const { user } = useUser();

  const stripePromise = loadStripe(
    "pk_test_51QfDLMIXauIQhi9zpYyko394OCzT9oOQKPvLFEn5siB1Eld53WIRA6H63Oowd9ldwe1lkzoOO6WrEjUq2bQM1Tgi004aRSvT6f"
  );

  //   const handleCheckout = async () => {
  //   const stripe = await stripePromise;

  //   try {
  //     const { data } = await axios.post("http://localhost:5001/create-checkout-session", {
  //       title,
  //       price,
  //     });

  //     await stripe.redirectToCheckout({ sessionId: data.id });
  //   } catch (error) {
  //     console.error("Error redirecting to Stripe:", error);
  //     toast.error('Something Happen Wrong!')
  //   }
  // };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    axios
      .post("http://localhost:5001/create-checkout-session", {
        title,
        price,
      })
      .then((response) => {
        const sessionId = response.data.id;
        toast.success("Payment Added");
        return stripe.redirectToCheckout({ sessionId });
      })
      .catch((error) => {
        console.error("Error redirecting to Stripe:", error);
        toast.error("Something Went Wrong!");
      });
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  const images = [image, image, image]; // Replace with real gallery images if available

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");

  function hotToast() {
    toast.error("Log in Frist");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
          <img
            src={images[currentImageIndex]}
            alt="Course"
            className="object-cover w-full h-full"
          />
          <button
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-blue-600 hover:text-white"
          >
            <BiChevronLeft size={24} />
          </button>
          <button
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % images.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-blue-600 hover:text-white"
          >
            <BiChevronRight size={24} />
          </button>
        </div>

        <div className="flex gap-3 justify-between">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-24 aspect-video rounded-md overflow-hidden ring-offset-2 transition ${
                currentImageIndex === idx
                  ? "ring-2 ring-blue-500"
                  : "hover:ring-2 hover:ring-blue-400"
              }`}
            >
              <img
                src={img}
                alt={`Thumb ${idx}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Course Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-600">({rating}/5)</span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex items-center gap-3">
          <span className="text-2xl text-blue-600 font-bold">${price}</span>
          <span className="line-through text-gray-400 text-sm">
            ${originalPrice}
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
            {discount}% OFF
          </span>
        </div>

        <div className="border-t pt-4 space-y-2">
          <p className="text-gray-800 font-semibold text-sm">
            What you'll get:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {benefit.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <p className="font-medium text-sm text-gray-600">Offer ends in:</p>
          <div className="flex gap-4 mt-2">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center text-sm">
                <span className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">
                  {formatNumber(timeLeft[unit])}
                </span>
                <span className="text-gray-500 capitalize">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <p className="text-xs text-blue-600">Instructor: {email}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsFavorite(!isFavorite), hotToast();
              }}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-600" />
              )}
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <IoBookmarkOutline />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <GoShareAndroid />
            </button>
          </div>
        </div>

        {user ? (
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        ) : (
          <button
            onClick={hotToast}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewCard;
