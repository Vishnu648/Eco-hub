import React, { useState } from "react";
// import { useHistory } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import { Link } from "react-router-dom";

const Signup = () => {
  //   const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userNo, setUserNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !userName ||
      !userNo ||
      !email ||
      !password ||
      !bloodGroup ||
      !userLocation ||
      isNaN(userName)
    ) {
      setErrorMessage("Please enter valid information in all fields");
      return;
    }

    try {
      // Make a fetch request to your backend API endpoint for signup
      const response = await fetch("your_signup_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: userName,
          user_no: userNo,
          email: email,
          password: password,
          blood_group: bloodGroup,
          user_location: userLocation,
        }),
      });

      if (response.ok) {
        // history.push('/login'); // Redirect to login page after successful signup
      } else {
        setErrorMessage("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div
    
    >
      <Link to='/' >
          <button className="bg-white text-black px-4 py-1 rounded-full hover:cursor-pointer">back</button>
        </Link>
      <div
        style={{
          width: "480px",
          height: "600px",
          background: "grey",
          position: "absolute",
          top: "60px",
          left: "500px",
          transform: "translate(0%,-5%)",
          borderRadius: "10px",
          padding: "55px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{
              width: "400",
              fontFamily: "sans-serif",
              textAlign: "center",
              color: "#ff7200",
              fontSize: "27px",
              backgroundColor: "#fff",
              borderRadius: "60px",
              margin: "25px",
              padding: "10px",
            }}
          >
            Signup
          </h2>
          <input
            style={{
              height: "25px",
              borderRadius: "5px",
              padding: "13px",
              border: "solid thin #aaa",
              width: "100%",
            }}
            type="text"
            name="user_name"
            placeholder="Enter User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <input
            style={{
              height: "25px",
              borderRadius: "5px",
              padding: "13px",
              border: "solid thin #aaa",
              width: "100%",
            }}
            type="text"
            name="user_no"
            placeholder="Enter phone no"
            value={userNo}
            onChange={(e) => setUserNo(e.target.value)}
          />
          <br />
          <br />
          <input
            style={{
              height: "25px",
              borderRadius: "5px",
              padding: "13px",
              border: "solid thin #aaa",
              width: "100%",
            }}
            type="text"
            name="email"
            placeholder="Enter email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            style={{
              height: "25px",
              borderRadius: "5px",
              padding: "13px",
              border: "solid thin #aaa",
              width: "100%",
            }}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input
            style={{
              height: "25px",
              borderRadius: "5px",
              padding: "13px",
              border: "solid thin #aaa",
              width: "100%",
            }}
            type="text"
            name="blood_group"
            placeholder="Enter blood group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <br />
          <br />
          <input
            style={{
              height: "25px",
              borderRadius: "5px",
              padding: "13px",
              border: "solid thin #aaa",
              width: "100%",
            }}
            type="text"
            name="user_location"
            placeholder="Enter location"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
          />
          <br />
          <br />
          <input
            style={{
              padding: "10px",
              width: "100px",
              // color: "white",
              backgroundColor: "lightblue",
              border: "none",
              cursor:'pointer'
            }}
            type="submit"
            value="Signup"
          />
          <br />
          <br />
          <Link to="/login">
            back to Login
          </Link>
          <br />
          <br />
        </form>
      </div>
      {errorMessage && (
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "17px",
            paddingTop: "10px",
            textAlign: "center",
            color: "red",
          }}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Signup;
