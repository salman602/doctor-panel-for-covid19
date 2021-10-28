import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateDoctor.css'

const UpdateDoctor = () => {
    const [doctor, setDoctor] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/doctors/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[id]);


    const handleNameChange = (e) =>{
        const updatedName = e.target.value;
        const updatedDoctor = {...doctor};
        updatedDoctor.name = updatedName;
        setDoctor(updatedDoctor);
    }
    const handleFeeChange = (e) =>{
        const updatedFee = e.target.value;
        const updatedDoctor = {...doctor};
        updatedDoctor.fee = updatedFee;
        setDoctor(updatedDoctor);
    }

    const handleUpdateDoctor = (e) =>{
        const url = `http://localhost:5000/doctors/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('Doctors information updated successfully.');
                setDoctor({})
            }
        })
        e.preventDefault();

    }


    return (
        <div className="container update-doctor">
            <h3 className="text-center">THis is update user.</h3>
            <h4 className="text-center">Name: {doctor.name}</h4>
            <form onSubmit={handleUpdateDoctor}>
                <input onChange={handleNameChange} type="text" name="" id="" placeholder="Update name" value={doctor.name || ''} /> <br />
                <input onChange={handleFeeChange} type="number" name="" id="" placeholder="Update fee" value={doctor.fee || ''} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateDoctor;