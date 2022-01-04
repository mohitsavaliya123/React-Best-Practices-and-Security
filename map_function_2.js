render () {
  let cartoons = {
  "Pika": {
    type: "Electric",
    level: 10
  },
  "Squi": {
    type: "Water",
    level: 10
  },
  "Bulb": {
    type: "Grass",
    level: 10
  },
  "Char": {
    type: "Fire",
    level: 10
  }
  };
  return (
  <ul>
    {Object.keys(cartoons).map(name => <Cartoons key={name} {... cartoon[name]} />)}
  </ul>
  );
}
