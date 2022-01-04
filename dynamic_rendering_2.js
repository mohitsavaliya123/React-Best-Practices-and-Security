class FilterResult extends Component {
  render () {
  let { filterResults } = this.props;
  return (
    <section className="search-results">
      { filterResults.length > 0 &&
        filterResults.map(index => <Result key={index} {... results[index] />)
      }
      { filterResults.length === 0 &&
        <div className="no-results">No results</div>
      }
    </section>
  );
  }
}
