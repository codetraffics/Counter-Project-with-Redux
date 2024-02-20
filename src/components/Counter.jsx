import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "../app/features/counter/counterSlice";

const Counter = () => {
  // Read the data from the store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
};

export default Counter;
