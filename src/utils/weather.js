const request = require('request');

const weather = (city,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=19ae65a30cb0c0bf8e0ea9b8eb7d0090&query='+city;
    request({url:url,json:true},(error,response) => {
           if(error)
           {
               callback('unable to connect!!',undefined)            
           }
           else
           {
               callback(undefined,"it is currently "+response.body.current.temperature+" degrees out.")
       
           }
       })
}

module.exports = weather;