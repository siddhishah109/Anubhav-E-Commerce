import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../../redux/thunkm';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    console.log('Email:', email);
    console.log('Password:', password);
    // Add your authentication logic here
    try {
      const response = await dispatch(loginAdmin({ email, password }));
     console.log("response",response)
      if (response.payload && response.payload.success) {
        localStorage.setItem('adminToken', response.payload.token);
        navigate('/admin-home') 
      } else {
        
        console.error('Admin login failed:', response.payload.message);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminLogin