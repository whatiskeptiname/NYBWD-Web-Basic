import React, {useState} from 'react';
import axios from 'axios';
import {Button, TextField} from '@material-ui/core';
import url from './url';
import { Link, Redirect } from "react-router-dom";

export default function RegisterForm() {
    const [valUserName, setvalUserName] = useState();
    const [valPassword, setvalPassword] = useState();
    const register = ()=>{
        axios.post(`${url}/register`, {
        "username": valUserName,
        "password": valPassword
        })
        .then(function (response) {
            let message = response.data["message"]
            alert(message);
            if(message === "Username already taken!"){
            }
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    const getUsername = (e)=>{
        setvalUserName(e.target.value);
    }

    const getPassword = (e)=>{
        setvalPassword(e.target.value);
    }


    return (
        <div className="register">
            <form>
            <h4>Register for new user.</h4>
            <TextField value={valUserName} onChange={getUsername} id="outlined-basic" label="Username" variant="outlined" />
            &nbsp;&nbsp;&nbsp;
            <TextField value={valPassword} onChange={getPassword} id="outlined-basic" label="Password" variant="outlined" />
            <br/><br/>
            <Link to='/login'><Button onClick={register} variant="contained" color='default'> Register </Button></Link>
            </form>
        </div>
    )
}
