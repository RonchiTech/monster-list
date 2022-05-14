const SearchBox = ({ placeholder, onChangeHandler }) => (
  <input
    type="text"
    className="input-text"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
