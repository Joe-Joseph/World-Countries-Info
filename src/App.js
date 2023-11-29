import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Countries } from './pages/Countries';
import { CountryDetails } from './pages/CountryDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Countries} />
        <Route path="/country/:countryCode" component={CountryDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
