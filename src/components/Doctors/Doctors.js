import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';

import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const [board, setBoard] = useState([])
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