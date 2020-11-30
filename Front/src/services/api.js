import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

//const express = require('express')
//const app = express()
//const port = 3000
//
//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})
//
//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})
//




const api = axios.create({
  baseURL: "http://192.168.0.16:5000/",
  headers: {
    'Content-Type': 'application/json'
  }
  //withCredentials: true,
});

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.withCredentials = true;
//axios.defaults.crossDomain = true;

//var express = require('express')
//var api = express()
//const port = 5000
//var cors = require('cors')

//api.use(cors())

export default api;