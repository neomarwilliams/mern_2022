import React, { useState } from 'react';

const HookFormValidations = (props) => {

    const [ textError, setTextError ] = useState('');
    // const [ firstNameError, setFirstNameError ] = useState('');
    // const [ lastNameError, setLastNameError ] = useState('');
    // const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ confirmPasswordError, setConfirmPasswordError ] = useState('');
    const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);

    const textValidations = (e, x) => {

        setTextError(e.target.value);
        if(e.target.value.length < 1) {
            setTextError("This field is required");
        
        } else if (e.target.value.length < x) {
            setTextError("Field must contain at least " + { x } + "characters");
        
        } else {
            setTextError("");
        }
    }


    return(
        <div>
            <h1>Return Statement Here</h1>
        </div>
    )
}

export default HookFormValidations;