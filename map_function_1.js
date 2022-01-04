render () {
  let cartoons = [ "Pika", "Squi", "Bulb", "Char" ];
  return (
  <ul>
    {cartoons.map(name => <li key={name}>{name}</li>)}
  </ul>
  );
}
