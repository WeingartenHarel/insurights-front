import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {HomePage} from './components/HomePage'
import ItemDetailsPage from './components/Medical/ItemDetailsPage'
import Header from './components/Header/';
import {ItemEdit} from './components/Medical/ItemEdit/';
 
 <script src="https://use.fontawesome.com/5030e262e9.js"></script>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* render header */}
      <Router>
      <Header /> 
        <Switch>
          <Route path="/Item/edit/:id" component={ ItemEdit }/>
          <Route path="/Item/edit/" component={ ItemEdit }/>
          <Route path="/Item/details/:id" component={ ItemDetailsPage }/>
          <Route path="/" component={ HomePage } />
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;

