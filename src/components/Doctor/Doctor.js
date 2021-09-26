import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    // destructuring object
    const { name, age, img, department, country, fee, phone } = props.doctor || {};
    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100">
                <img src={img} style={{ "height": "160px" }} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h6 className="card-title">Name: {name}</h6>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Age: {age}</li>
                    <li className="list-group-item">Dept: {department}</li>
                    <li className="list-group-item">Country: {country}</li>
                    <li className="list-group-item">Fee: ${fee}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>

                <div className="card-footer bg-transparent border-success">
                    <button onClick={() => props.handleAddDoctor(props.doctor)} id="btn-status"><i className="fas fa-user-md"></i> Add to board</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
