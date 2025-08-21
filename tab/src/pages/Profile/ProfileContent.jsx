import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileContent = ({ activeTab }) => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <p>This is the Overview section.</p>;
      case 'userDetails':
        return (
          <div>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {username}</p>
            <p><strong>Email:</strong>{username.toLocaleLowerCase().replace('',".")}@gmail.com</p>
            <p><strong>Joined:</strong> January 1, 2023</p>
          </div>
        );
      case 'logout':
        return (
          <div>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button
              onClick={() => {
                
                 localStorage.removeItem('isLoggedIn');
                 localStorage.removeItem('username');
                 alert('Logged out!');
                 navigate('/login');
              }}
              style={{ padding: '10px 20px', marginTop: '10px' }}
            >
              Confirm Logout
            </button>
          </div>
        );
      default:
        return <p>Select a tab.</p>;
    }
  };

  return (
    <div style={{  padding: '2rem', alignContent:'center', flex:1, backgroundColor:' rgba(209, 189, 209, 1)', padding: '1 rem'}}>
      {renderContent()}
    </div>
  );
};

export default ProfileContent;
