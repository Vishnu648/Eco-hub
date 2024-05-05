import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom"; // assuming you're using react-router-dom for routing

const UpdateAvailability = () => {
//   const history = useHistory();

  const [gData, setGData] = useState({ g_name: "", location: "" });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Assuming you're using fetch or axios for HTTP requests
      try {
        const response = await fetch("your_backend_check_login_endpoint");
        const data = await response.json();
        setGData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !time) {
      setErrorMessage("Please select both date and time");
      return;
    }

    try {
      const response = await fetch(
        "your_backend_update_availability_endpoint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: date, time: time }),
        }
      );

      if (response.ok) {
        // history.push("/gselect"); // Redirect to gselect page after successful submission
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div
    >
      <a href="glogout.php">LOGOUT</a>
      <br />
      <br />
      <p>Hello {gData.g_name}</p>
      <h1>Update available date and time</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Pick the date you're available:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label htmlFor="time">Select a time:</label>
        <input
          id="time"
          type="time"
          name="time"
          step="2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <input id="button" type="submit" value="SUBMIT" />
        <br />
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default UpdateAvailability;
