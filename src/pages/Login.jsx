import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!userName || !password || !isNaN(userName)) {
      setErrorMessage("Please enter a valid username and password");
      return;
    }

    try {
      // Make a fetch request to your backend API endpoint for login
      const response = await fetch("your_login_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: userName, password: password }),
      });

      if (response.ok) {
        // Redirect to select page after successful login
        navigate("/select");
      } else {
        setErrorMessage("Wrong username or password!");
      }
    }
     catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Link to="/">
        <button className="bg-white text-black px-4 py-1 rounded-full hover:cursor-pointer">
          back
        </button>
      </Link>
      <div
        style={{
          width: "450px",
          height: "420px",
          background: "grey",
          position: "absolute",
          top: "130px",
          left: "500px",
          transform: "translate(0%,-5%)",
          borderRadius: "10px",
          padding: "55px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{
              width: "500",
              fontFamily: "sans-serif",
              textAlign: "center",
              color: "#ff7200",
              fontSize: "27px",
              backgroundColor: "#fff",
              borderRadius: "60px",
              margin: "25px",
              padding: "20px",
            }}
          >
            Login Here
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
            type="password"
            name="password"
            placeholder="Enter password Here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              cursor: "pointer",
            }}
            type="submit"
            onClick={handleSubmit}
            value="Login"
          />
          <br />
          <br />
          <p>
            <b>Don't have an account</b>
          </p>
          {/* <a href="signup.php">Click to Signup</a> */}
          <Link to="/signup">
            <p className="text-md text-blue-800 hover:underline">
              Click to signup
            </p>
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

export default Login;
