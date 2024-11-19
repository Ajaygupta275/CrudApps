import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Signup successful!');
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSignup}>
        <h2 className="text-2xl mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
       
      </form>
    </div>
  );
};

export default Signup;
