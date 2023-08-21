//nadi lel express (import par require)
const express = require('express')
const path= require('path')


//initianilation server
const app = express()
const port =5000

app.get('/home',(req, res)=>{
    res.sendFile(path.join(_dirname, "Components", "home.hml" ))
}

)

  //  creation server
    app.listen(port,(err)=>err ? console.log(err):console.log("server is running"))
