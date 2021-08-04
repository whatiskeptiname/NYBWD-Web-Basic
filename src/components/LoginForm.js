import React, {useState} from 'react';
import axios from 'axios';
import {Button, TextField} from '@material-ui/core';
import url from './url';
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [valUserName, setvalUserName] = useState();
    const [valPassword, setvalPassword] = useState();
    const login = ()=>{
        axios.post(`${url}/login`, {
        "username": valUserName,
        "password": valPassword
        })
        .then(function (response) {
        var access_token=response.data["access_token"];
        var refresh_token=response.data["refresh_token"];
        let message = response.data["message"];
        alert(message);
        console.log(access_token);
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
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
        <div className="login">
            <Link to="/register"><Button style={{marginLeft:"70%"}} variant='outlined' color='secondary'>{"<<"} </Button></Link>
            <br/>
            <form>
            <h4>Login to your account.</h4>
            <TextField value={valUserName} onChange={getUsername} id="outlined-basic" label="Username" variant="outlined" />
            &nbsp;&nbsp;&nbsp;
            <TextField value={valPassword} onChange={getPassword} id="outlined-basic" label="Password" variant="outlined" />
            <br/><br/>
            <Link to="/mobilize"><Button onClick={login} variant="contained" color='primary'> Login </Button></Link>
            </form>
            
        </div>
    )
}
