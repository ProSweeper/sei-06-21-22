import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../services/userService';

export default function SignupPage({ handleSignupOrLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await userService.signup(formData);
    handleSignupOrLogin();
    navigate('/');
  }

  function isFormInvalid() {
    return !(formData.name && formData.email && formData.password === formData.passwordConf);
  }

  return (
    <div className='page'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} >
        <label>Name:</label>
        <input type="text" placeholder="Name" value={formData.name} name="name" onChange={handleChange} />
        <label>Email:</label>
        <input type="email" placeholder="Email" value={formData.email} name="email" onChange={handleChange} />
        <label>Password:</label>
        <input type="password" placeholder="Password" value={formData.password} name="password" onChange={handleChange} />
        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm Password" value={formData.passwordConf} name="passwordConf" onChange={handleChange} />
        <label></label>
        <button disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
      </form>
    </div>
  );
}
