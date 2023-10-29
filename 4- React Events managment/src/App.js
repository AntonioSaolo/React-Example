import './App.css';
import Form from './components/function_component_event';
import ProvaEvento from './components/class_component_event';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestione Eventi</h1>
      </header>
      <main>
        <div className="form">
          <Form />
        </div>
        <hr></hr>
        <div className="form">
          <ProvaEvento />
        </div>
      </main>
    </div>
  );
}

export default App;
