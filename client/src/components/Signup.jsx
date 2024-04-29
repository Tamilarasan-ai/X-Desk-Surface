import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/style.css'


const SignUp = () => {
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const Navigate = useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3003/signup', {username,email,password})
        .then(result => console.log(result))
        Navigate('/Home')
        .catch(err=> console.log(err))
    }

  return (
    <div className='container'>
    <div  className="signup">
      <div className='signup_container'>
      <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          {/* <div className='signup_name'>
            <div className='signup_name_container_1'>
          <label htmlFor="">First Name</label><br />
          <input type="text" placeholder='First Name' />
          </div>

          <div className='signup_name_container_2'>
          <label htmlFor="">Last Name</label><br />
          <input type="text" placeholder='Last Name' />
          </div>
          </div> */}
          <label htmlFor="">UserName</label>
          <input type="text" name="username" placeholder='UserName' id="" onChange={(e)=> setUsername(e.target.value)} required />
          <label htmlFor="">Email</label>
      <input type="email" placeholder='email' name='email' onChange={(e)=> setEmail(e.target.value)} required />
      <label htmlFor="">Password</label>
      <input type="password" placeholder='password' name='password'  onChange={(e)=> setPassword(e.target.value)} required />
     <div className='signup_btn'>
      <button type='submit'>sign up</button>
      </div>
      </form>
      <div className='login_account'>
      <p>Already have an Account?</p>
      <Link to="/Login" >login</Link>
      </div>
      
      </div>

      <div className='signup_img'>
        
        
      </div>
    </div>
    </div>
  )
}

export default SignUp