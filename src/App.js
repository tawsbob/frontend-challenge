import { Home, NewTransactionPage } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { ApiProvider } from './components'


const WithRoute = (Component, path)=>(
  <Route exact path={path}>
    <Component />
  </Route>
)

function App() {

  return (
    <Router>
      <Switch>
          <ApiProvider>
            { WithRoute(Home, '/') }
            { WithRoute(NewTransactionPage, '/new-transaction') }
          </ApiProvider>
        </Switch>
    </Router>
  );
}

export default App;
