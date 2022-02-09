import React, { useState } from 'react';

const MoreForms = (props) => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState(""); 
    const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);

    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(""); 

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        // Sensei Bonus??
        // if(hasBeenSubmitted == false) {
        //     setFirstNameError("");
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must contain 2 or more characters.")
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must contain 2 or more characters.")
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        
        if(e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must contain 5 or more characters.")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must contain 8 or more characters.")
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required");
        } else if(e.target.value == password) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Passwords Must Match");
        }
    }

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
                }
                <div>
                <h5>{ firstNameError }</h5>
                    <label>First Name:</label>
                    <input type="text" onChange={ handleFirstName } /> 
                </div>
                <div>
                <h5>{ lastNameError }</h5>
                    <label>Last Name:</label>
                    <input type="text" onChange ={ handleLastName } /> 
                </div>
                <div>
                <h5>{ emailError }</h5>
                    <label>Email:</label>
                    <input type="email" onChange ={ handleEmail } /> 
                </div>
                <div>
                <h5>{ passwordError }</h5>
                    <label>Password:</label>
                    <input type="password" onChange ={ handlePassword } /> 
                </div>
                <div>
                    <h5>{ confirmPasswordError }</h5>
                    <label>Confirm Password:</label>
                    <input type="password" onChange ={ handleConfirmPassword } /> 
                </div>
                <button type="submit" onClick ={ createUser }>Create User</button>
            </form>
        </div>
        
    )
}

export default MoreForms;