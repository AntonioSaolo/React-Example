import './App.css';
import React from 'react';
import axios from 'axios'
import UsersTable from './UsersTable';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount() {
    console.log("Did mount!!")
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res)
      const users = res.data
      this.setState({ users: users })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Gestione Api</h1>
        </header>
        <UsersTable users={this.state.users}></UsersTable>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
