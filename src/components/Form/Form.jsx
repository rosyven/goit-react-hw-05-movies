import { useState } from "react";
import css from "./Form.module.css";

const SearchForm = ({ setSearchParams }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
      // setSearchQuery(e.target.value);
      const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchQuery);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search films"
        value={searchQuery}
        onChange={e => handleChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;