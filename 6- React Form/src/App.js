import './App.css';
import MyForm1 from './components/first_form';
import MyForm2 from './components/second_form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestione Form</h1>
      </header>
      <main>
        <MyForm1 />
        <hr />
        <MyForm2 />
      </main>
    </div>
  );
}

export default App;
