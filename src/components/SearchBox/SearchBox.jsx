import clsx from "clsx";
import css from "./SearchBox.module.css";

// eslint-disable-next-line react/prop-types
const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <h2 className={clsx(css.titleFilter)}>Find contacts by name</h2>
      <input
        className={clsx(css.inputFilter)}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
export default SearchBox;
