import { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import '../Styles/Style.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/login', { email, password });
      console.log(response.data);
      Navigate('/Home');
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className='container'>
      <div className="signup">
      <div className='signup_img' style={{borderRadius:"15px 0px 0px 15px", borderLeft:"0px",borderRight:"2px solid black"}}>
      </div>
        <div className='signup_container'>
          <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} required />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} required />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className='signup_btn'>
                <button type='submit'>Login</button>
                </div>
                <div className='login_account'>
          <p>Don&apos;t have an Account?</p>
          <Link to="/" >signup</Link>
          </div>
              </form>
        </div>
      
      </div>
    </div>
  );
};

export default LoginForm;
