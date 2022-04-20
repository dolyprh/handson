import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store';
import Navbar from './pages/navbar/';
import Trending from "./pages/trending";
import Search from "./pages/search";

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className='content'>
          <Navbar />
          <Switch>
            <Route path="/trending"  component={Trending} />
            <Route path="/search" component={Search} />

            <Route path='/' className="home-content">
              <Link to="/search" >Search </Link>
              <Link to="/trending">Trending</Link>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
