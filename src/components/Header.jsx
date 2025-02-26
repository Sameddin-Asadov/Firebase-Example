import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { PiStudentFill } from "react-icons/pi";
import logo from "../logo/CreativeSchool.png"
import { FaUserGraduate } from "react-icons/fa6";
function Header() {
  const navigate= useNavigate()
  const logout = async ()=>{
    await signOut(auth)
    navigate("/auth")
    toast.success("System logout completed")
  }

  const [appear,setAppear]= useState('none')
console.log(auth) 
  useEffect(()=>{
    if (auth.currentUser){setAppear('block')}
  },[])
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth , (user)=>{
      if(user){
        setAppear('block')
      }else{
        setAppear('none')
      }
    })
    return ()=> unsubscribe();
  },[])
  return (
    <div>
        <div className="header-div">
            <div className='header-logo'><FaUserGraduate className='header-icon' />
            </div>
           
            <div  style={{display:appear}} >
              <button className='all-btn' >Home</button>
              <button className='all-btn'>About</button>
              <button className='all-btn'>Contact</button>
                <input placeholder='Search' className="header-input" type="text" />
                  <button  className='exit-buton'  onClick={logout}>Exit</button>
            </div>
        </div>
    </div>
  )
}

export default Header