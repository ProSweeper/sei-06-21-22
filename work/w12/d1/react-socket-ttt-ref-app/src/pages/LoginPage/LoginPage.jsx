import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../services/userService';

export default function LoginPage({ handleSignupOrLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    pw: ''
  });
  const navigate = useNavigate();

  function handleChange (e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(formData);
      handleSignupOrLogin();
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='page'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" placeholder="Email" value={formData.email} name="email" onChange={handleChange} />
        <label>Password:</label>
        <input type="password" placeholder="Password" value={formData.pw} name="pw" onChange={handleChange} />
        <label></label>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
