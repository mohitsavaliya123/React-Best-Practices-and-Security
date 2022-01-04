class FilterResult extends Component {
  render () {
  let { filterResults } = this.props;
  return (
    <section className="search-result">
      { filterResults.length > 0
        ? filterResults.map(index => <Result key={index} {... filterResults[index] />)
        : <div className="no-result">No results</div>
      }
    </section>
  );
  }
}
