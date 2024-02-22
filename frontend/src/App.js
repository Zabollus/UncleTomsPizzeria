import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "./components/Menu"
import MyNavbar from "./components/MyNavbar"
import FormTopping from "./components/FormTopping"
import FormPizza from "./components/FormPizza"

function App() {
  return (
    <>
        <MyNavbar />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Menu}/>
                <Route path='/add/pizza' component={FormPizza}/>
                <Route path='/add/topping' component={FormTopping}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
