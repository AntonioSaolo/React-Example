import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserView from './components/UserView';
import UserTable from './components/UsersTable';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const users = response.data
      this.setState({ users: users })

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Routing</h1>
          <nav className='navbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserTable users={this.state.users} />} />
            <Route path='/user/:userId' element={<UserView />} />
          </Routes>
        </main>
      </div>)
  }
}



export default App;

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Routing</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </main>
    </div>
  );
} 
*/

