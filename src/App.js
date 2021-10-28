import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Doctors from './components/Doctors/Doctors';
// import Doctors from './components/Doctors/Doctors';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UpdateDoctor from './components/UpdateDoctor/UpdateDoctor';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/doctors/update/:id">
            <UpdateDoctor></UpdateDoctor>
          </Route>
          

        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
