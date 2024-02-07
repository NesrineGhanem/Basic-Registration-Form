import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values,setValues]= useState({
   firstName:"",
   lastName:"",
   email:"" 
  });
  const [submitted,setSubmited]= useState(false);
  const [valid,setValid]= useState(false);
  const handleFirstNameInput = (e)=>{
    setValues({...values,firstName:e.target.value})
  }
  const handleLastNameInput = (e)=>{
    setValues({...values,lastName:e.target.value})
  }
  const handleEmailInput = (e)=>{
    setValues({...values,email:e.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(valid.firstName && valid.lastName && valid.email){
      setValid(true)
    }
    setSubmited(true);

  }
  return (
    <div className="form-container">
      <form className="register-form" onChange={handleSubmit}>
        {submitted && valid?<div class="success-message">Success! Thank you for registering</div>:null}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInput}
        />
         {submitted && !values.firstName?<span id="first-name-error">Please enter a first name</span>:null}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInput}
        />
         {submitted && !values.lastName?<span id="last-name-error">Please enter a last name</span>:null}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInput}
        />
        {submitted && !values.email?<span id="email-error">Please enter an email address</span>:null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
