const axios = require('axios');

const getPlace = async (address) => {
    
    let encodedUrl = encodeURI(address);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&Key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    
    if(resp.data.status === 'ZERO_RESULTS') {throw new Error(`No hay resultados para la ciudad ${address}`); }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlace
}