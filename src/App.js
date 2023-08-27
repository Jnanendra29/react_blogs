import Navbar from './Navbar';
import Home from './Home';
import Home1 from './Home1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              {/* <Home/> */}
              <Home1 />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
