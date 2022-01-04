class Gallery extends Component {
  render () {
  let { image, title } = this.props;
  return (
    <figure>
      <img src={image} alt={title} />
      <figcaption>
        <p>Title: {title}</p>
      </figcaption>
    </figure>
  );
  }
}
