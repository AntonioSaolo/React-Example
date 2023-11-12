import './App.css';
import Incremento from './components/Incremento';
import MountUnmount from './components/MountUnmount';
import MultiSelectDropdown from './components/MultiSelectDropdown';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Functional Components</h1>
      </header>
      <main>
        <Incremento />
        <hr />
        <MountUnmount />
        <hr />
        <MultiSelectDropdown />
      </main>
    </div>
  );
}

export default App;
