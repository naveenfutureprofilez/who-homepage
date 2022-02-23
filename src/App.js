import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css'; 
import { Helmet } from 'react-helmet';
//pages
import Header from './elements/Header';
import Footer from './elements/Footer';
import Home from './Pages/Home';
import About from './Pages/About';



function App() {
  return (
     
    <div className="App"> 
          <Helmet>
                <title>whoyouonto</title>
                <meta name="title" content="" /> 
                <meta name="description" content="" />
                <meta property="description"  content="" />
  	            <meta name="keywords" content=""/> 
                <meta property="keywords" content=""/> 

            </Helmet>     
        {
          <Router>
            {/* header*/}
           <Header />
           {/* switch cases */}            
               <Switch>
                   <Route exact path="/">
                       <Home />
                   </Route>
                   <Route path="/About">
                       <About />
                   </Route>
               </Switch>
            
           {/* footer */}
           <Footer />
       </Router> 
        }
    </div>
     
  );
}

export default App;
 