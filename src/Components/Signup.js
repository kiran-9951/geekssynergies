import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css"
const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.name === name);
    if (existingUser) {
      toast.error('Username already exists. Please choose a different username.');
      return;
    }

    const user = { name, password, email, phone, profession };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    toast.success('Signup successful! You can now login.', {
      onClose: () => navigate('/login')
    });
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="signup-form-border p-4">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSignup}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="profession">Profession</label>
                <select
                  className="form-control"
                  id="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  required
                >
                  <option value="">Select Profession</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Signup
              </button>
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={() => navigate('/login')}
              >
                Already have an account? Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
