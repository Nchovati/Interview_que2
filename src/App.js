import React, { useState } from "react";
import Modal from "./components/modal";
import "./styles.css";

export default function App() {
  const [isOpen, setIsopen] = useState(false);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Unemployed");
  const employmentStatus = ["Unemployed", "part time", "full time"];

  const handleClick = (e) => {
    e.preventDefault();
    if (fname === "" || lname === "" || address === "" || email === "") {
      alert(`enter all required fields`);
    }else{
      setIsopen(true);
    }
    
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError(`Please provide a valid email`);
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const handleChange = e => {
    setSelectedValue(e.target.value);
  }

  return (
    <div id="app" className="App">
      <h1>React Coding Assignment</h1>
      <form onSubmit={handleClick}>
        <div>
          <label>
            firstname
            <input
              type="text"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            lastname
            <input
              type="text"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Address
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" value={email} onChange={handleEmail} />
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
          </label>
        </div>
        <div>
          <select onClick={handleChange}>
            {employmentStatus.map((val) => (
              <option>{val}</option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
      {isOpen && <Modal fname={fname} lname={lname} email={email} address={address} selectedValue={selectedValue} closeModal = {() => setIsopen(!isOpen)} />}
    </div>
  );
}
