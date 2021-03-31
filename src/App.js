import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects/index';

function App() {
  return (
   <div className="container">
    <Router>
    <Navbar />
    <Switch>
      <div className="App">   
      <Route exact path="/" component={ Home } />     
        <Route path="/about" component={ About } />  
        <Route path="/projects" component={ Projects } />   
      </div>
    </Switch>
   </Router>
   </div>
  );
}

export default App;
