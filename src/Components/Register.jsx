import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth,db } from '../Components/firebase' 
import { setDoc,doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const Register = () => {


  const[firstname,setFirstname] = useState();
  const[lastname,setLastname] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();



  const handleSubmit =async(e)=>{
      e.preventDefault();
      try {
        
        await createUserWithEmailAndPassword(auth,email,password) // This line code save the email and password in auth 

        const user = auth.currentUser;   // auth.currentUser is save the email and password in variable 
      
        if(user)
          // db is database user-auth is db name and user.uid is userid for db
        {
          await setDoc(doc(db,"user-auth",user.uid),{
            email:user.email,
            firstName:firstname,
            lastName:lastname,
          })
        }

        toast.success("User Successfully Created")
        setFirstname(" ")
        setLastname(" ")
        setEmail(" ")
        setPassword(" ")
        console.log("user successfully registered")
        
        
      } catch (error) {
        console.log(error.message)
      }
  }


  return (
    <div>
      <div className="container mx-auto p-5">
      <ToastContainer />
            <div className="flex my-20 flex-row justify-center items-center ">
                <form onSubmit={handleSubmit} className="main-div box-shadow p-10 px-16  ">
                    <h1 className='text-center mb-5 text-3xl font-bold '>SIGN UP</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">Enter Your firstName:</label>
                        <input type="text" value={firstname} name='firstname' onChange={(e) =>setFirstname(e.target.value)} required className='border-2 border-blue-500 rounded outline-none p-1'  />
                     </div>
                     <div className='flex mt-5 flex-col'>
                        <label htmlFor="lastname">Enter Your lastname:</label>
                        <input type="text" value={lastname} name='lastname' onChange={(e) =>setLastname(e.target.value)} required className='border-2 border-blue-500 rounded outline-none p-1'  />
                     </div>
                     <div className='flex mt-5 flex-col'>
                        <label htmlFor="email">Enter Your Email:</label>
                        <input type="text" value={email} name='email' onChange={(e) =>setEmail(e.target.value)} required className='border-2 border-blue-500 rounded outline-none p-1'  />
                     </div>
                     <div className='flex mt-5 flex-col'>
                        <label htmlFor="password">Enter Your password:</label>
                        <input type="password" value={password} name='password' onChange={(e) =>setPassword(e.target.value)} required className='border-2 border-blue-500 rounded outline-none p-1 '   />
                     </div>
                    <div className='flex justify-center items-center mt-5'>
                        <input type="submit" value="Submit" className='p-2 px-4 rounded hover:scale-110 bg-blue-500 text-white' />
                    </div>
                    <div className="flex justify-end mt-4">
                                    <p className="text-sm">Already have account <Link to='/' className="text-blue-500">login</Link></p>
                                </div>
                </form>
            </div>
        </div>
    </div>
  )
}
