import axios from 'axios'
import React from 'react'

const SignUpUser = (userData) => {
    axios.post("http://localhost:8080/api/users/signup", userData)
        .then(response => {
            console.log("User registered successfully", response)
        })
        .catch(error => {
            console.error("There was an error registering the user", error);
        });
}

export default SignUpUser