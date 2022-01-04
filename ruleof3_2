class Gallery extends Component {
  render () {
  let { image, title, artist, clas, thumbnail, breakpoint } = this.props;
  return (
    <figure className={clas}>
      <picture>
        <source media={`(min-width: ${breakpoint})`} srcset={image} />
        <img src={thumbnail} alt={title} />
      </picture>
      <figcaption>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
      </figcaption>
    </figure>
  );
  }
}
