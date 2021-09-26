import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    // declare useState hook
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        // Load data from public/doctors.json folder
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const [board, setBoard] = useState([])
    // buttons event handler
    const handleAddDoctor = (doctor) => {
        const newBoard = [...board, doctor];
        setBoard(newBoard)
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor.id}
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