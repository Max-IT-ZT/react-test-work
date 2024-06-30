import { FiSearch } from "react-icons/fi";
import style from "./Form.module.css";
import { useState } from "react";
export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return alert("Can not be empty");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        onChange={handleChange}
        value={query}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
