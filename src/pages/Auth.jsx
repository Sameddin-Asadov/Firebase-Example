import React, { useState } from 'react'
import '../css/Auth.css';
import {  createUserWithEmailAndPassword , GoogleAuthProvider ,signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { toast } from 'react-toastify';
import {auth} from '../Firebase' 
import   {useNavigate}  from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { GrFormEdit } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import image from "../logo/CreativeSchool.png"

const provider = new GoogleAuthProvider();
function Auth() {
const [email, setEmail] = useState('')
const [password, setPassword]= useState('')
const navigate = useNavigate()



const loginWithGmail = async ()=>{
  try {
    const response = await signInWithPopup(auth, provider)
    const user = response.user 
    if(user){
      navigate('/')
    }
  } catch (error) {
    error.message
  }
}
const register = async ()=>{
try {
  const response= await createUserWithEmailAndPassword(auth , email, password)
  const user = response.user 
  if(user){
    toast.success("uqurluGiris")
  }
  
} catch (error) {
  toast.error(error.message)
}
}

const login = async()=>{
  try {
     const response = await signInWithEmailAndPassword(auth, email, password)
     const user = response.user 
     if(user){
      navigate('/')
     }
  } catch (error) {
    toast.error(error.message)
  }
}

  return (
    <div className='auth-parent'>
      <div className='parent-image'>
        <img src={image} className='image'/>
      </div>
     <div className="form">
     <div className="info-div">"Welcome! Log in to access exclusive content."</div>
      <div className="input-div">
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email Daxil edin' />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Kod daxil edin' />
      </div>
      <div className="button-div">
      <button className='button-item' onClick={loginWithGmail}><FcGoogle/> <span> Sign in with Google </span></button>
        <button onClick={register}  className='button-item'><MdEmail /> <span> Sign in with email</span></button>
        <button  onClick={login} className='button-item ' id='register' ><GrFormEdit /> <span>Register Now</span></button>
      </div>
     </div>
    </div>
  )
}

export default Auth