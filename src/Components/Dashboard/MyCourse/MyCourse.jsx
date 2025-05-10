import React from 'react'
import useCourse from '../../Hooks/useCourse'
import { Link } from 'react-router-dom';
import useEmail from '../../Hooks/useEmail';
import { FaTrash } from 'react-icons/fa';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const MyCourse = () => {

  const [course] = useCourse([]);
  
   const email = useEmail();
   const myCourse = course.filter(cor => cor.email == email);
   const axiosSecure = useAxios()

   function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/course/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your course has been deleted.",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Not Found",
              text: "No course was deleted.",
              icon: "error"
            });
          }
        });
      }
    });
  }
  
  
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        My Courses
      </h2>

      {/* Table  */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              myCourse && myCourse.map((cor , idx) => 
                <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={cor.image}
                          alt={cor.title}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {cor.title}
                </td>
                <td>
                {cor.price} $
                </td>
                <td className='flex items-center gap-1 '>
                  <Link to={`/view/${cor._id}`}>
                  <button className="btn btn-xs">view</button>
                  </Link>
                  <button onClick={()=>handleDelete(cor.id)} className="btn btn-xs text-red-500">
                    <FaTrash ></FaTrash>
                  </button>
                </td>
              </tr>
              )
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyCourse



    // const imgFile = {
    //   image: data.image[0]
    // }
    // const imageFile = frm.image.files[0];
    // const res = axiosSecure.post(img_api_key ,imageFile , {
    //   headers: {
    //     'Content-Type' : 'multipart/form-data'
    //   }
    // })

    // console.log(res.data);


  
    // const imageFile = frm.image.files[0];
  
    // const formData = new FormData();
    // formData.append("image", imageFile);
  
    // axiosSecure.post(img_api_key, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // })
    // .then(res => {
    //   const imageUrl = res.data.data.url;
    //   console.log("Uploaded image URL:", imageUrl);
  
    //   // Now you can proceed to send course data
    // })
    // .catch(err => {
    //   console.error("Image upload failed:", err);
    // });
    