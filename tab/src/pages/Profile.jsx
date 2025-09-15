import React from 'react'
import { useState } from 'react';
import ProfileContent from './Profile/ProfileContent';
import ProfileMenu from './Profile/ProfileMenu';
const Profile = () => {
    const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{paddingTop:"40px"}}>Profile -  welcome to profile page.
        <div> 
         
        <p style={{margin:"25px"}}> 
          We envision a world where everyone has access to sustainable and
          innovative solutions that improve their quality of life. At our
          Company, we aim to lead the way in our industry by setting new
          standards for quality and service.we aim to lead the way in our industry by setting new
          standards for quality and service.
          </p> 

        </div> 
              
      
      {/* also use display as 'grid' */}
      <div style={{ display: 'flex', height: '60vh', margin:'50px'}}>
      <ProfileMenu activeTab={activeTab} onTabChange={setActiveTab} />
      <ProfileContent activeTab={activeTab} />
    </div> 
    </div>
  )
}

export default Profile