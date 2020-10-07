import React from 'react';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../src/assets/scss/style.scss";



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
