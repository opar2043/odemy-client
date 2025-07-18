import React, { useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";


const Login = () => {
  const { handleLogin, user, setUser, googleSignin } = useAuth();
  const [value , setValue] = useState(false);
  function handleToggle(){
    setValue(!value)
    console.log(value);
  }

  const navigate = useNavigate();
  const axiosSecure = useAxios();

  function handleSignIn(e) {
    e.preventDefault();
    const target = e.target;
    const pass = target.pass.value;
    const email = target.email.value;

    handleLogin(email, pass)
      .then((userCredential) => {
        const myUser = userCredential.user;
        setUser(myUser);
        console.log(user);
        Swal.fire({
          title: "Logged In!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("something happem wrong");
      });
  }

  function handleGoogle() {
    googleSignin()
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
        setUser(userCredential.user);
        // axiosSecure.post("/users", userCredential.user).then((res) => {
          // Swal.fire({
          //   title: "Registered Successfully!",
          //   icon: "success",
          //   draggable: true,
          // });
          navigate("/");
        // });
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
      });
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-xl bg-base-200 px-4 py-16 sm:px-6 lg:px-8 mt-7 rounded-md">
        <div className="mx-auto max-w-lg text-center ">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Started Shopping today!
          </h1>

          <p className="mt-4 text-gray-500">Connect to Us</p>
        </div>

        <form
          onSubmit={handleSignIn}
          action="#"
          className="mx-auto shadow p-3 rounded-md  mt-8 mb-0 max-w-md space-y-4  "
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter email"
                name="email"
                defaultValue={'jasim12@gmail.com'}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    onClick={handleToggle}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter password"
                name="pass"
                defaultValue={'1234567'}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
            <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    onClick={handleToggle}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />

                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link to={"/register"} className="text-blue-500 font-bold">
                {" "}
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              className="btn-wide rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
          <div className="mx-auto">
            <button
              onClick={()=>googleSignin()}
              className="text-center btn btn-outline w-full border border-gray-400"
            >
              <FaGoogle></FaGoogle>Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;