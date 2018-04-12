let cities = ['東京都豊島区巣鴨3-37-2', '東京都豊島区巣鴨3-14-16'];

geocodeAll(cities).then(geocodes => {
    geocodes.forEach(geocode => {
        console.log(geocode.results[0].geometry.location.lat);
        console.log(geocode.results[0].geometry.location.lng);
    }) 
});

function geocodeAll(cities) {
    const Promise = require('bluebird');
    let geocoder = Promise.promisifyAll(require('geocoder'));
    
    let promises = [];
    for (var i = 0; i < cities.length; ++i) {
        promises.push(geocoder.geocodeAsync(cities[i]));
    }

    return Promise.all(promises);
} 

