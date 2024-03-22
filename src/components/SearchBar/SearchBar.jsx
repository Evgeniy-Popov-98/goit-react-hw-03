const SearchBar = ({ filter, onChangeFilter, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};
export default SearchBar;
