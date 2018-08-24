const axios  = require('axios');

const getWaterByCoords = async (lat, lng) => {

     let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e4f82b1857c2b6c2a6bd26430c28adbe`)
    
     let temperature = resp.data.main.temp;
     return {
         temp: temperature
     }
 }

module.exports = {
    getWaterByCoords
}