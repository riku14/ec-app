import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SignUpUser from './SignUpUser'

const HelloJava = () => {
    const [helloJava, setHelloJava] = useState("")
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SignUpUser(userData);  // APIリクエスト
    };
    

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/hello")
    //         .then(response => {
    //             setHelloJava(response.data)
    //         })
    //         .catch(error => {
    //             console.error("not Response", error)
    //         })
    // }, [])

  return (
    <div>
        <h1>{helloJava}</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={userData.username} onChange={handleInputChange} placeholder='username' />
            <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Password" />
            <button type="submit">Register</button>            
        </form>
    </div>
  )
}

export default HelloJava