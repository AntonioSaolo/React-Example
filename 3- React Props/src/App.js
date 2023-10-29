import './App.css';

function MyComponent(props) {
  return (
    <div>
      <h2>{ props.title}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components e props</h1>
      </header>
      <MyComponent title="Test title" />
    </div>
  );
}

export default App;
