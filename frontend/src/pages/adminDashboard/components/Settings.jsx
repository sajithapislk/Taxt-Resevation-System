import React, { useState } from 'react';

function Settings() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Logic to handle save (e.g., make an API call to update the admin details)
    alert('Settings saved successfully!');
  };

  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-4" onClick={handleSave}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
