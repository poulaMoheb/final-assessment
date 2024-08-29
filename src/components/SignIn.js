import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn(props) {
  let [userName,setUserName]=useState('')
  let [password,setPassword]=useState('')
  let users=props.users
  let handleSubmit = () =>{
      let found=users.filter(item=>{
        return item.userName===userName
      })
      // props.setIsLoggedIn(true)
      console.log();
      found.length>0&&found[0].password===password&&props.setIsLoggedIn(true)
        

  }
  return (
    <div className='auth-container'>
      <h1>For better experience please <span>log in</span></h1>
     <TextField className='form-inputs' onChange={(e)=>setUserName(e.target.value)} value={userName} id="userNameInput" type='text' label="User Name" variant="outlined" required/>
     <TextField className='form-inputs' onChange={(e)=>setPassword(e.target.value)} value={password} id="passwordInput" type='password' label="Password" variant="outlined" required/>
     <div className='sub-container'>

      <Button onClick={()=>handleSubmit()} className='form-buttons' variant="contained">
        Login
      </Button>
      <Link to='signup'className='form-buttons'><Button variant="outlined" >
        Sign Up
        </Button>
        </Link>
     </div>

    </div>
  )
}

export default SignIn
