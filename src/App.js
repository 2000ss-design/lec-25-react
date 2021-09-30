import Navbar from "./navbar";
import Home from "./home";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import Create from "./create";
import BlogDetails from "./Blogdetails";

function App() {

   
  return (
    
    <Router>
    <div className="App">
    <Navbar/>
    <div className="content">
    <Switch>
    
    <Route exact path="/">
        <Home />
   </Route>
    <Router path="/create"  >
    <Create  />
    </Router>
    <Router path="/blogs/:id"  >
  <BlogDetails  />
  </Router>
  </Switch>
    
    </div>
  </div>
    </Router> 
  );
}

export default App;
