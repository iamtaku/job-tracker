import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./context";

// import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <AppProvider>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </AppProvider>
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
