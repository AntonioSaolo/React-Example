import logo from './logo.svg';
import './App.css';
import TestComponent from './test_component';
import SecondComponent from './classComponent';

const user = {
  name: 'Antonio',
  surname: 'Saolo'
}

function crea_user(user) {
  return user.name + user.surname
}

const elemento = <h3 id="test">Ciao, {crea_user(user)}</h3>

function App() {
  const test = "Hello World!!"
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {elemento}
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <TestComponent />
        <SecondComponent></SecondComponent>
      </main>
    </div>
  );
}

export default App;
