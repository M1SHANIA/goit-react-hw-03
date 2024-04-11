import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.findContainer}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Searching contacts..."
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
