const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const weather = require('./utils/weather.js')


const partialsPath = path.join(__dirname,'../views/partials')
app.set('view engine','hbs');
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res) => {
    //app.render();
    res.render('index',{
        title:'Home app',
        name:'Vaibhav Bhosale'
    });
})

app.get('/help',(req,res)=>{
    res.render('index',{
        title:'help app',
        name:'Vaibhav Bhosale'
    });
})

app.get('/about',(req,res)=>{
    res.render('index',{
        title:'about app',
        name:'Vaibhav Bhosale'
    });
})

app.get('/weather',(req,res)=>{
    weather(req.query.address,(error,data)=>{
        return res.send(data);
        })
})

app.get('*',(req,res)=>{
console.log('404 page')
})

app.listen(8080,()=>{
    console.log('server is up')
});