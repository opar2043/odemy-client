import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewCard = ({rev}) => {
    const {image , name , review , rating , position} = rev ;
  return (
    <div className='grid grid-cols-1 rounded shadow-lg w-80 border my-4 h-auto md:my-8'>
        <div className='flex  gap-5 p-4 items-center bg-violet-200'>
            <img src={image} alt="" className='rounded-full w-12 h-12' />
            <div className='flex flex-col gap-1 text-sm py-2'>
                <h2 className="text-lg text-slate-800">{name}</h2>
                <p className="text-sm text-slate-500">{position}</p>
            </div>
        </div>
       
        <div className='p-2 md:p-5 flex flex-col gap-3'>
            <div className="flex items-center gap-2 text-yellow-600">
                ({rating}) <Rating style={{ maxWidth: 100 }} className="text-violet-600" value={rating} />
            </div>
            <p className='text-gray-500 text-xs text-left '>{review}</p>
            <a href="#" className='text-violet-600 underline '>Learn More</a>
        </div>
    </div>
  )
}

export default ReviewCard