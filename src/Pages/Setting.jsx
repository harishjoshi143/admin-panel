// src/components/SettingsPage.js
import React, { useState } from 'react';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(false);

  const handleSave = () => {
    alert('Settings saved!');
    setEmail("")
    setUsername("")
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="settings-section">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="settings-section">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="settings-section">
        <label>
          Notifications:
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </label>
      </div>
      <button className='savebtn' onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
