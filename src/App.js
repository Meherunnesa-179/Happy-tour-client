import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Places from './Components/Places/Places';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import AuthProvider from './Contexts/useAuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';
import Dashboard from './Components/Dashboard/Dashboard';
import AddNewPlace from './Components/AddNewPlace/AddNewPlace';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import SelectedPackage from './Components/SelectedPackage/SelectedPackage';


function App() {
  return (
    <div className="App">
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
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/places">
            <Places></Places>
          </Route>
          <PrivateRoute exact path ="/places/:id">
              <PlaceDetail></PlaceDetail>
            </PrivateRoute>
            <PrivateRoute exact path = "/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
           </Route>
           <Route path="/register">
            <Register></Register>
          </Route> 
           <Route path="/addnewplace">
            <AddNewPlace></AddNewPlace>
          </Route> 
           <Route path="/adminpanel">
            <AdminPanel></AdminPanel>
          </Route> 
          <Route path="selectedpackage">
            <SelectedPackage></SelectedPackage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router> 
     </AuthProvider>
    </div>
  );
}

export default App;
