import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDoctor.css'

const AddDoctor = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/doctors', data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('Doctor added successfully.')
                reset();
            }
        })
    };
    return (
        <div className="container add-doctor">
            <h3 className="text-black text-center">Please Add doctor information here.</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age" />
                <input {...register("department")} placeholder="Department"/>
                <input {...register("country")} placeholder="country"/>
                <input {...register("img")} placeholder="Image Url"/>
                <input type="number" {...register("fee")} placeholder="Fee" />
                <input type="number" {...register("phone")} placeholder="Phone" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;