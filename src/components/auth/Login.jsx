import { LOGIN_BG_IMAGE, LOGIN_VALIDATE } from "../../utils/constants";
import { useFormik } from 'formik';
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice.jsx";

const initialValues = {

    email: "",
    password: "",
}


const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            handleFormSubmit(values?.email, values?.password)
        },
        LOGIN_VALIDATE
    });

    async function handleFormSubmit(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;

            
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage(errorCode.split('/')[1]);

            });
    }

    return (
        <div className="w-full flex justify-center items-center h-screen md:h-[40rem] bg-[#26313C]">

            <section className=" w-[85%] md:w-[70%] flex justify-between bg-[#16202A] rounded-lg">
                <form className="w-full px-6 md:px-0 md:w-[50%] flex flex-col items-center" onSubmit={formik.handleSubmit}>
                    <h1 className="text-white mt-8 md:mt-12 text-lg md:text-4xl my-3 md:my-6 text-left">Login</h1>
                    <div className="py-1 md:my-2 w-full px-1 md:px-6 flex justify-center flex-col items-center">
                        <input type="email" name="email" id="" placeholder="Enter Email"
                            onChange={formik?.handleChange} onBlur={formik?.handleBlur}
                            value={formik?.values?.email} 
                            className="text-white bg-transparent border w-full md:w-3/4 px-2 md:px-4 py-2 rounded-full text-xs md:text-sm" />
                        <p className='text-red-400 text-sm my-1'>{formik?.errors?.email && formik.touched.email && formik?.errors?.email}</p>

                    </div>
                    <div className="py-1 md:my-2 w-full px-1 md:px-6 flex justify-center flex-col items-center">
                        <input type="password" name="password" id="" placeholder="Enter Password"
                            value={formik?.values?.password} onChange={formik?.handleChange}
                            onBlur={formik?.handleBlur} 
                            className="ext-white bg-transparent border w-full md:w-3/4 px-2 md:px-4 py-2 rounded-full text-xs md:text-sm" />
                        <p className='text-red-400  text-sm my-1'>{formik?.errors?.password && formik.touched.password && formik?.errors?.password}</p>

                    </div>
                    <button className=" bg-blue-500 rounded-full w-[90%] md:w-3/5 my-2 md:my-6 py-2 text-white text-sm md:text-lg" type="submit">Login</button>
                    <p className='text-red-400 text-sm mx-2'>{errorMessage}</p>
                    <span className="text-slate-200 text-xs md:text-sm px-1 mb-4 md:mb-0">Don&apos;t have an account? &nbsp; <Link to={'/sign-up'} className="text-sm underline underline-offset-2 text-green-400">Sign Up</Link>  </span>
                </form>
                <div className="hidden md:block w-[50%]">
                    <img src={LOGIN_BG_IMAGE} alt="" className="h-[20rem] md:h-[34rem] w-full" />
                </div>
            </section>

        </div>
    )
}

export default Login