import React from 'react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'userDetails', label: 'User Details' },
  { id: 'logout', label: 'Logout' },
];

const ProfileMenu = ({ activeTab, onTabChange }) => {
  return (
    <div style={{ width: '270px', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 10 }}>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              onClick={() => onTabChange(tab.id)}
              style={{
                background: tab.id === activeTab ? '#ccc' : 'transparent',
                border: 'none',
                padding: '10px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
