import React, { useEffect, useState } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';
import Header from '../components/Header'

function Home() {

const [userEmail,setUserEmail]= useState('')

 useEffect(()=>{
  onAuthStateChanged(auth, (user) =>{
    if(user){
       const userid= user.email
       setUserEmail(userid)
    }
      })
 },[])
  
  return (
    <div >
      <Header />
      <div>Hello </div>
    </div>
  )
}

export default Home