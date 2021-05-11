import './App.css';
import { Route, Switch } from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './components/HomePage/HomePage';
import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/cursor.edu-hw-thunk-redux/" component= { HomePage } exact />
          <Route path="/cursor.edu-hw-thunk-redux/adduser" component= { AddUser } />
          <Route path="/cursor.edu-hw-thunk-redux/users" component= { Users }/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
