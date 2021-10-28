import React, { useEffect, useState } from 'react';
// import { addToDb } from '../../utilities/localDB';
import Board from '../Board/Board';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    // declare useState hook
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        // Load data from public/doctors.json folder
        // Load data from backend server
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const [board, setBoard] = useState([]);
    // buttons event handler
    const handleAddDoctor = (doctor) => {
        const newBoard = [...board, doctor];
        setBoard(newBoard);
        // addToDb(doctor.id);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor._id}
                                doctor={doctor}
                                handleAddDoctor={handleAddDoctor}
                            ></Doctor>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Board board={board}></Board>
                </div>
            </div>
        </div>
    );
};

export default Doctors;