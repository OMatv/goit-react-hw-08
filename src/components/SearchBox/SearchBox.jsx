import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { setFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const filterId = nanoid();

  return (
    <div className={css.filter}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={css.inputFilter}
        id={filterId}
        type="search"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
