const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'))
const port = 3030
app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));



app.listen(port,()=> console.log(`Server running in http://localhost:${port}`))


app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
});

app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
});