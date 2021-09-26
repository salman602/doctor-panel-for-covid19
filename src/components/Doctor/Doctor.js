import React from 'react';
import './Doctor.css'

const Doctor = (props) => {


    // console.log(props.doctor);
    // console.log(props);
    const { name, age, img, department, country, fee, phone } = props.doctor
    return (
        <div className="col-md-4 mb-3">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title">Name: {name}</h6>

                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Age: {age}</li>
                    <li class="list-group-item">Dept: {department}</li>
                    <li class="list-group-item">Country: {country}</li>
                    <li class="list-group-item">Fee: ${fee}</li>
                    <li class="list-group-item">Phone: {phone}</li>

                </ul>
                <div class="card-footer bg-transparent border-success">
                    <button onClick={() => props.handleAddDoctor(props.doctor)} id="btn-status"><i class="fas fa-user-md"></i> Add to board</button>
                </div>

            </div>
        </div>
    );
};

export default Doctor;
