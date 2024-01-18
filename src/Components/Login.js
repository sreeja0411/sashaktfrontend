import React, { useState } from 'react';

const Login = () => {
  const [uniqueName, setUniqueName] = useState('');
  const [name, setName] = useState('');

  const handleUniqueNameChange = (event) => {
    setUniqueName(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="background175">
      <section className="login-section">
        <form className="login-form">
          <h1>Login</h1>
          <div className="inputbox">
            <label className={uniqueName ? 'active' : ''}>Unique Name</label>
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="text" 
              value={uniqueName}
              onChange={handleUniqueNameChange}
              required
              pattern="^(?=.*\d).+$"
              title="Must contain at least one digit"
            />
          </div>
          <div className="inputbox">
            <label className={name ? 'active' : ''}>Name</label>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="forget">
            <a href="#">Forget Password</a>
          </div>
          <button type="submit">Log in</button>
          <div className="register">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
