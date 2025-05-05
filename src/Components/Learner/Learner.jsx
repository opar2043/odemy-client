import img1 from '../../assets/accourante.svg'
import img2 from '../../assets/adobe.svg'
import img3 from '../../assets/microsoft.svg'
import img4 from '../../assets/paypal.svg'
import img5 from '../../assets/walmart.svg'

const Learner = () => {
  return (
    <div className='w-9/12 mx-auto my-5 md:mb-20'>
      <h2 className='font-semibold text-center my-3 text-md md:text-xl mb-3 md:mb-10 text-gray-600'>Trusted By Learner</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
         <img src={img2} alt="adobe" />
         <img src={img1} alt="accurante" />
         <img src={img3} alt="microsoft" />
         <img src={img4} alt="paypal" />
         <img src={img5} alt="walmart" />
      </div>
    </div>
  )
}

export default Learner