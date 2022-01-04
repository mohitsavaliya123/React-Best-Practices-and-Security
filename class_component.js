// class component
class Cat extends React.Component {
  render () {
	let { badOrGood, type, color } = this.props;
	return <div classname="{type}">My {color} cat is { badOrGood } </div>;
  }
}
