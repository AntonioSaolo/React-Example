import './App.css';
import Component from './components/class_component_state';
import React from 'react';
import Benvenuto from './components/benvenuto';
import Test from './components/test_child_to_parent';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log()
    this.state = { loggedIn: false, testoRicerca: '' }
  }

  LogingLogout = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  modificaTestoRicerca = (testoRicerca) => {
    this.setState({ testoRicerca: testoRicerca })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gestione stati</h1>
        </header>
        <main>
          <Component />
          <hr />
          <h1>Gestione Stato ottimizzato</h1>
          <button onClick={this.LogingLogout}>Login/LogOut</button>
          <Benvenuto utenteAutenticato={this.state.loggedIn} />
          <hr />
          <h1>Gestione stato con valore di ritorno da figlio a genitore</h1>
          <Test onChangeTestoRicerca={this.modificaTestoRicerca} testoRicerca={this.setState.testoRicerca} />
          <h3>Valore ricevuto dal componente figlio: {this.state.testoRicerca}</h3>
          <p>N.B: Metodo comodo ma non consigliato, meglio gestire la logica nel componente padre e propagarla ai figli i quali eseguono solo specifiche operazioni senza ritorno</p>
        </main>
      </div>
    );
  }
}

export default App;
