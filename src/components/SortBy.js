const SortBy = ({ setSortBy, setOrderBy }) => {
  const handleSortBy = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };

  const handleOrderBy = (event) => {
    event.preventDefault();
    setOrderBy(event.target.value);
  };

  return (
    <>
      <label for="sort-by">Sort By:</label>

      <select name="sort-by" id="sort-by" onChange={handleSortBy}>
        <option value="date">Date</option>
        <option value="comment-count">Comment count</option>
        <option value="votes">Votes</option>
      </select>

      <label for="order-by">Order By:</label>

      <select name="order-by" id="order-by" onChange={handleOrderBy}>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </>
  );
};

export default SortBy;
