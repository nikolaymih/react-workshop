import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories';
import PetsDetails from './components/PetsDetails/PetsDetails'
import Footer from './components/Footer/Footer'
import Demo from './components/forms'
import './App.css';

function App() {
  return (
    <div className="Container">
      <Header />

      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' exact component={Categories} />
        <Route path='/pets/details/:petID' component={PetsDetails} />
        <Route path='/demo' component={Demo} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
