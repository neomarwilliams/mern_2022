import React, { useState } from 'react';
import HookFormValidations from './HookFormValidations';

const HookForm = (props) => {
    //const { initalFirstName, initialLastName, initialEmail, initialPassword, initialConfirmPassword } = props;
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(true);

    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = {
            firstName, 
            lastName, 
            email,
            password
        };
        console.log("Welcome", newUser);
    }

    const formMessage = () => {
        if ( hasBeenSubmitted ) {
            console.log("Thank you for submitting the form")
            return "Thank you for submitting the form!";
        } else {
            console.log("Welcome, please submit the form")
            return "Welcome, please submit the form";
        }
    };

    // const firstNameError = (e) => {
    //     setFirstName(e.target.value);
    //     if (e.target.value.len() < 1) {
    //         setFirstNameError("First Name is required!");
    //     } else if (e.target.value.length < 2) {
    //         setFirstNameError("First Name must be 2 or more characters");
    //     } else {
    //         setFirstNameError("");
    //     }
    // };

    return (
        <div>
            <form onSubmit = { createUser }>
                <h3> { formMessage() }</h3>
                <HookFormValidations></HookFormValidations>
                <div>
                    <label>First Name:</label>
                    <input type = "text" onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type = "text" onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type = "email" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type = "password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type = "password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <h1>Your Form Data:</h1>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </div>
        
    )

}

export default HookForm;