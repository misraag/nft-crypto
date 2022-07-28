import React, {useRef, useState} from 'react';

import {useAuth} from '../contexts/AuthContext'
import {useHistory} from "react-router-dom"
import {withRouter} from "react-router-dom"
import Logo from "./Images/logo.jpg"

var CryptoJS = require("crypto-js");

// const emailRef = useRef()
// const passwordRef = useRef()

const Button = () =>{
    const wallRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    let history = useHistory()
    
    
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError('')
            setLoading(true)
            await login(wallRef.current.value)
            history.push("/")
        } catch(error) {
            console.log(error)
            setError("Failed to sign in")
        }
        setLoading(false)
    }
    
    return(
    <div className=" py-6 flex flex-col mx-auto sm:py-12">
        <button onClick={handleSubmit} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">Connect Wallet</button>
        </div>
    );

}



export default withRouter(Button);
