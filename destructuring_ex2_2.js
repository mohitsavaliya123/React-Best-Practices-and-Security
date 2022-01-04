class Cat extends Component {
  render () {
  let { type, color, isGoodCat } = this.props;
  let identifier = isGoodCat? "good" : "bad";
  return <div className={type}>My {color} cat is {identifier}</div>;
  }
}
