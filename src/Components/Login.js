import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.name === name && user.password === password);

    if (user) {
      toast.success('Login successful!', {
        onClose: () => {
          setIsLoggedIn(true);
          navigate('/home');
        }
      });
    } else {
      toast.error('Invalid Credentials');
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-primary">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  onClick={() => navigate('/')}
                >
                  Don't have an account? Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
