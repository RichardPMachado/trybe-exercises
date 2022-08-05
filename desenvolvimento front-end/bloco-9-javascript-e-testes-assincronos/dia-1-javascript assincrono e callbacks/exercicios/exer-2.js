const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};
setTimeout(() => console.log(getPlanet()), 3000);
// getPlanet(); // imprime Marte depois de 4 segundos