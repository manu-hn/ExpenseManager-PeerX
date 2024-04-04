import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../Firebase.jsx";
import { useEffect } from "react";
import { loginUser, logoutUser } from "../redux/slices/userSlice.jsx";
import React from 'react';

const Header = () => {
  const userInfo = useSelector(store => store.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate('/error')
      throw new Error(error);
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, 
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(loginUser({ uid, email, displayName, photoURL }));
        navigate('/expense')
      } else {
        // User is signed out
        dispatch(logoutUser())
        navigate('/')

      }
    });

    return () => unsubscribe();
  }, [])

  return (
    <div className="w-screen  md:w-full  flex justify-between px-8 md:px-28 h-12 md:h-14  items-center bg-slate-400 ">

      <Link to={'/expense'} className="text-sm text-white md:text-lg"><span className="text-lg md:text-4xl text-orange-800">eX</span>pense Manager</Link>

      <Link to={'/sign-up'}>
        <button className="bg-[#C11119] text-white px-2 text-xs md:text-sm md:px-6 py-1 rounded-md" onClick={logoutHandler}>{userInfo ? "Sign Out" : "Sign Up"}</button>
      </Link>


    </div>
  )
}

export default Header