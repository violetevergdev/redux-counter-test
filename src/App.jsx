import "./styles.css";
import Counter from "./Counter";

export default function App({ store }) {
  const onIncrement = () => {
    store.dispatch({
      type: "INCREMENT"
    });
  };
  const onDecrement = () => {
    store.dispatch({
      type: "DECREMENT"
    });
  };
  return (
    <div className="App">
      <h1>Redux counter test</h1>
      <Counter
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        value={store.getState()}
      />
    </div>
  );
}
