import React, { useEffect, useState } from 'react'
import {auth,db} from '../Components/firebase'
import { doc,getDoc } from 'firebase/firestore'


export const Home = () => {
  const[userDetails,setUserDetails] = useState()

  const fetchdata = async()=>{
     auth.onAuthStateChanged(async(user)=>{ 
        const docRef = doc(db,"user-auth",user.uid)  // Store the value in variable
        const docSnap = await getDoc(docRef)  // Get the value in the Database db is database name
        if (docSnap.exists()) { // exists is  check the value have or not
          setUserDetails(docSnap.data())
        }
        else{
          console.log("User is not defined")
        }
     }
     )
  }
  
  useEffect(()=>{
      fetchdata()
  },[])
  


  return (
    <div>
      <div className='container my-20  mx-auto p-5 '>
        <div className='flex mt-40 justify-center items-center'>
          {
          userDetails ? (
           <>
               <div className='bg-pink-500 p-10'>
                <p className='text-white font-bold text-center mb-5 text-lg '>Welcome</p>
               <h1 className='text-white'>Name: {userDetails.firstName}👋👋</h1>
               <p className='text-white'>Email: {userDetails.email}</p>
               </div>
           </>
          ):(
            <div className='bg-pink-500 p-10'>
              <p className='text-white'>Loading......</p>
            </div>
          )
        }
        </div>
        </div>
    </div>
  )
}
