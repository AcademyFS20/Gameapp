import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {
  Home,
  About,
  Persons,
  FAQ,
  Error
} from './pages'
import{
  Navbar,
  Footer,
  Sidebar
}
from './components';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>

      <Route exact path='/'>
         <Home/>
         </Route>
      <Route path='/About'>
        <About/>
        </Route>
      <Route path='/person'>
        <Persons/>
        </Route>
      <Route path='/faq'>
        <FAQ/>
        </Route>
      <Route path='*'>
        <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
