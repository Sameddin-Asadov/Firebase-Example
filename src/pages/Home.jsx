import React, { useEffect, useState } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';
import Header from '../components/Header'
import '.././css/Home.css'

function Home() {

const [userEmail,setUserEmail]= useState('')
const  [userName ,setUserName]= useState('')

 useEffect(()=>{
  onAuthStateChanged(auth, (user) =>{
    if(user){
       const userid= user.email
       setUserEmail(userid)
       const userName= user.displayName
       setUserName(userName)

    }
      })
 },[])
 
  return (
    <div >
      <Header />
      <div className='home-text'>Hello {userName} </div>
    </div>
  )
}

export default Home