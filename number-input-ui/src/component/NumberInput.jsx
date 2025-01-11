import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NumberInput = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h4>Positive Number Checker</h4>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Enter a positive number"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h4>Even Number Checker</h4>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Enter an even number"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h4>Odd Number Checker</h4>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Enter an odd number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
