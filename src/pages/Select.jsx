import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyWebsite() {
  const [user, setUser] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    // Assuming you have a function to fetch user data from server
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('connection.php'); // Assuming connection.php returns user data
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    // Assuming you have a logout function
    // Redirect to logout.php
    // window.location.href = 'logout.php';
    navigate('/login')
  };

  return (
    <div>
      <div className=' flex justify-between items-center'>

      <h1 className='text-4xl'>My Website</h1>
          <a href="#" onClick={handleLogout}>Logout</a>
      </div>
      <br />
      <br />
      {user && (
        <div>
          <p>Hello, {user.user_name}</p>
          <a href="athu.html">Click here for pickup schedule</a>
        </div>
      )}
    </div>
  );
}

export default MyWebsite;
