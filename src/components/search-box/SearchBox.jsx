import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ searchText, handleSearchChange }) => {
  const searchId = useId();

  return (
    <div className={css["search-div"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        className={css.search}
        type="text"
        value={searchText}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
