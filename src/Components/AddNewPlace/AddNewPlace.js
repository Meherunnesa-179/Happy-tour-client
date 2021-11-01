import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewPlace.css'

const AddNewPlace = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
         console.log(data);
         axios.post("https://desolate-dusk-69405.herokuapp.com/places" , data)
         .then(res =>{
             if(res.data.insertedId){
                 alert("Successfully Added A New Trek")
                 reset();
             }
         })
}
    return (
    <div className="p-5">
        <Container>
        <h1>Add New Trek</h1>
        <form className="new-place" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      <input placeholder="Cost" type="number" {...register("cost")} />
      <input placeholder="Emi-Form-Cost" type="number" {...register("emiForm")} />
      <input placeholder="img link" {...register("img")} />
      <textarea placeholder="Overview" {...register("overview")} />
      <input type="submit" />
    </form>
            </Container>          
        </div>
    );
};

export default AddNewPlace;