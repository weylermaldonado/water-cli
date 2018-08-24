const place = require('./Places/place');
const water =  require('./Water/water');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(address) => {
    let coors = await place.getPlace(argv.address);
    let temparature = await water.getWaterByCoords(coors.lat, coors.lng);

    return `El clima en ${colors.yellow(coors.address)} es de ${colors.blue(temparature.temp)}`;
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(e => console.log(e))