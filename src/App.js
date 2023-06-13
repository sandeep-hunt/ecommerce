import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Product_details from './Pages/Product_details/Product_details'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route path='/' component={Homepage} exact/>
          <Route path='/prd' component={Product_details} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
