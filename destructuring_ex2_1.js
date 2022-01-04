class Cat extends Component {
  render () {
	let { type, color, badOrGood } = this.props;
	return <div className={type}>My {color} cat is { badOrGood }</div>;
	}
}
