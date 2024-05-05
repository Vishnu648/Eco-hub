import React, { useState } from "react";
import {Link} from 'react-router-dom'
// import { useHistory } from 'react-router-dom'; // assuming you're using react-router-dom for routing

const Login = () => {
  //   const history = useHistory();

  const [gName, setGName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!gName || !password) {
      setErrorMessage("Please enter both Gname and password");
      return;
    }

    try {
      // Assuming you're using fetch or axios for HTTP requests
      const response = await fetch("your_backend_login_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ g_name: gName, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming your backend sends a success response like { success: true }
        if (data.success) {
          // Redirect to gselect page after successful login
          //   history.push('/gselect');
        } else {
          setErrorMessage("Wrong username or password!");
        }
      } else {
        // Handle non-successful response
        setErrorMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
        <Link to='/' >
          <button className="bg-white text-black px-4 py-1 rounded-full hover:cursor-pointer">back</button>
        </Link>
      <div
        style={{
          width: "450px",
          height: "390px",
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
            name="g_name"
            placeholder="Enter Gname"
            value={gName}
            onChange={(e) => setGName(e.target.value)}
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
              backgroundColor: "lightblue",
              border: "none",
            }}
            type="submit"
            value="Login"
          />
          <br />
          <br />
        </form>
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
    </div>
  );
};

export default Login;
