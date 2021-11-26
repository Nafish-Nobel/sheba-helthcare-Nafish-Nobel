

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import FooterSection from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';






function App() {
  return (
    <div className="App overflow-hidden">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
             </Route>
            <Route path="/login">
              <Login></Login>
             </Route>

             <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
             </PrivateRoute>


             <Route path="/registration">
               <Registration></Registration>

             </Route>


            <Route path="*">
            <NotFound></NotFound>
            </Route>

            
         
          </Switch>
         <FooterSection></FooterSection>
        </Router>
        </AuthProvider>
      
    </div>
  );
}

export default App;
