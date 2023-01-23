import useCustomHook from "./useCustomHook";

function App() {
  const jokes = useCustomHook();
  console.log("jokes", jokes);
  return (
    <div className="App">
      <h3>Joyonto Kumar Roy</h3>
      {/* {jokes.length &&
        jokes.map((item) => (
          <div className="single-data" key={item.id}>
            <h2>{item.title}</h2>
            <p>sfsdf</p>
          </div>
        ))} */}
    </div>
  );
}

export default App;
