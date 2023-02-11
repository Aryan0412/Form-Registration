import React, {useState,setState} from 'react';
import './style.css'
import { getDatabase } from "firebase/database"
import {base} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import App from '../App';
function RegistrationForm() {
    
    const [Name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [Phone,setPhone] = useState(null);
    const [Address,setAddress] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "Phone"){
            setPhone(value);
        }
        if(id === "Address"){
            setAddress(value);
        }

    }

    const handleSubmit = () =>{
        let obj = {
                Name : Name,
                email:email,
                Phone:Phone,
                Address:Address,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name">Name </label>
                    <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="Phone">
                    <label className="form__label" for="Phone">Phone </label>
                    <input className="form__input" type=""  id="Phone" value={Phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone"/>
                </div>
                <div className="Address">
                    <label className="form__label" for="Address">Address </label>
                    <input className="form__input" type="Address" id="Address" value={Address} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm;
export const database = getDatabase(App);