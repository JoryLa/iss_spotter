const { fetchMyIP, fetchCoordsByIP, fetchFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('173.180.207.197', (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coordinates:', data);
});

const exampleCoords = { longitude: -119.28585052490234, latitude: 50.6939697265625 };

fetchFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned ISS fly over times:', passTimes);
});
