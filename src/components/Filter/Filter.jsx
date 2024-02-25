import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Filter by name:
      <input type="text" onChange={(e) => dispatch(setFilter(e.target.value))} />
    </label>
  );
};

export default Filter;
