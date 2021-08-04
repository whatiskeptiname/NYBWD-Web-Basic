import {Button, Slider} from '@material-ui/core'
import axios from 'axios';
import { useState} from 'react';
import url from './url'
import { Link } from "react-router-dom";



function Mobilize() {
    const [speed, setSpeed] = useState();

  const forward = ()=>{

    let access_token = localStorage.getItem("access_token");
    let data = {
        action: 'forward',
        speed: speed
    };
    axios.interceptors.request.use(
        config =>{
            config.headers.authorization = `Bearer ${access_token}`;
            return config;
        },
        error =>{
            return Promise.reject(error);
        }
    );

    axios.post(`${url}/mobilize`,data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("forward");
  }
  const backward = ()=>{
    axios.post(`${url}/mobilize`, {
      "action": 'backward',
      "speed": speed
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("backward");
  }
  const left = ()=>{
    axios.post(`${url}/mobilize`, {
      "action": 'left',
      "speed": speed
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("left");
  }
  const right = ()=>{
    axios.post(`${url}/mobilize`, {
      "action": 'right',
      "speed": speed
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("right");
  }
  const stop = ()=>{
    axios.post(`${url}/mobilize`, {
      "action": 'stop',
      "speed": speed
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("stop");
  }

  const proximity = ()=>{
    axios.get(`${url}/proximity`, {
    })
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("proximity");
  }

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  
  const value = (value)=> {
    setSpeed(value);
    console.log(speed);
  }

  return (
    <div className="App">
    <Link to="/login"><Button style={{marginLeft:"70%"}} variant='outlined' color='secondary'>{"<<"} </Button></Link>
<div>
    <Button onClick={forward} variant="contained" color="primary"> FORWARD </Button>
    <div class="mobilize">
      <Button onClick={left}  variant="contained" color="primary"> LEFT </Button>
      <Button onClick={right} variant="contained" color="primary"> RIGHT </Button>
    </div>
    <Button onClick={backward} variant="contained" color="primary"> BACKWARD </Button>
  <div class="slider">
    <Slider
      defaultValue={0}
      getAriaValueText={value}
      aria-labelledby="discrete-slider-custom"
      step={10}
      valueLabelDisplay="auto"
      marks={marks}
    />
    <h5>Speed: {speed}</h5>
    <br/>
    <Button onClick={stop} variant="contained" color="secondary"> STOP </Button>
    <br/><br/>
    <Button onClick={proximity} variant="contained" color="primary"> PROXIMITY </Button>
    <br/>
    <h5>proximity: </h5>
  </div>

  </div>
</div>
  );
}

export default Mobilize;
