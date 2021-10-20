import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./components/home";
import Page404 from "./components/page404"


function App() {
  return (
    <div>
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
