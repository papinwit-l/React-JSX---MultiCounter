function App() {
  const counters = [{ id: 1, number: 0 }];
  const [count, setCount] = React.useState(counters);

  const countHandler = (item, n) => {
    let id = count.findIndex((el) => el.id == item.id);
    const newCounter = [...count];
    if (newCounter[id].number + n < 0) return;
    newCounter[id].number += n;
    setCount(newCounter);
  };

  const addCounter = () => {
    if (count.length < 1) {
      setCount([{ id: 1, number: 0 }]);
      return;
    }
    const newCounter = [...count];
    newCounter.push({
      id: newCounter[newCounter.length - 1].id + 1,
      number: 0,
    });
    setCount(newCounter);
  };

  const deleteCounter = (id) => {
    const newCounter = [...count];
    let cid = count.findIndex((item) => item.id == id);
    newCounter.splice(cid, 1);
    setCount(newCounter);
  };

  const plusTenAll = () => {
    const newCounter = count.map((item) => {
      item.number += 10;
      return item;
    });
    setCount(newCounter);
  };

  const clearAllCounter = () => {
    const newCounter = count.map((item) => {
      item.number = 0;
      return item;
    });
    setCount(newCounter);
  };

  const closeAllCounter = () => {
    setCount([]);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => addCounter()}>Add Counter</button>
      <button onClick={() => plusTenAll()}>+10</button>
      <button onClick={() => clearAllCounter()}>CLR All</button>
      <button onClick={() => closeAllCounter()}>Close All</button>
      {count.map((item) => {
        return (
          <Counter
            key={item.id}
            item={item}
            countHandler={countHandler}
            deleteCounter={deleteCounter}
          />
        );
      })}
      {/* <Counter count={count} setCount={setCount} countHandler={countHandler} /> */}
    </div>
  );
}

function Counter(props) {
  const { item, countHandler, deleteCounter } = props;
  return (
    <div className="counter">
      <button onClick={() => countHandler(item, -1)}>-</button>
      <h1>{item.number}</h1>
      <button onClick={() => countHandler(item, 1)}>+</button>
      <button onClick={() => countHandler(item, -item.number)}>C</button>
      <button onClick={() => deleteCounter(item.id)}>X</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
