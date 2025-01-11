import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const NumberInput = () => {
  const [message, setMessage] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "" || isNaN(value)) {
      setMessage("Please enter a number");
      setNumbers([]);
      return;
    }

    const number = parseInt(value, 10);

    if (number < 0) {
      setMessage("Please enter a positive value");
      setNumbers([]);
    } else {
      setMessage("");

      if (number % 2 === 0) {
        setNumbers([number + 2, number + 4, number + 6]);
      } else {
        setNumbers([number + 2, number + 4, number + 6]);
      }
    }
  };
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="text-primary">Number Input</h2>
        <p className="lead text-muted">
          Enter a number to see the next sequence of numbers
        </p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg shadow-sm border-info"
          placeholder="Enter a number"
          onChange={handleChange}
          style={{ fontSize: "1.2rem", padding: "15px", borderRadius: "10px" }}
        />
      </div>

      {message && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Opps!</strong> {message}
        </div>
      )}
      {numbers.length > 0 && (
        <div>
          <h4 className="text-success">Next Numbers:</h4>
          <ul className="list-group list-group-flush">
            {numbers.map((num, i) => (
              <li
                key={i}
                className="list-group-item bg-light text-dark shadow-sm mb-2"
                style={{ fontSize: "1.2rem" }}
              >
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NumberInput;
