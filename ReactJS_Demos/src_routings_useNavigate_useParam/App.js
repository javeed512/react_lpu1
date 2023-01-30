
import { BrowserRouter , Routes ,Route, Link,  Navigate } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Error from './Error';
import Hello from './Hello';

import Home from './Home';
import LoginComponent from './LoginComponent';

function App() {
  return (
    <>
      <h1>Welcome to App Component</h1>

      <BrowserRouter>

          <nav>

          <Link  to="/">Home</Link>
          <Link  to="/contact/javeed/30">Contact Us</Link>
          <Link  to="/about">About Us</Link>
          <Link  to="/*">Error</Link>

         


          </nav>


        <Routes>

          <Route  exact path="/"  element={<Home/>}  ></Route>

          <Route   path="/home"  element={<Home/>}  ></Route>


          <Route path="/contact/:name/:age"  element={<Contact />}  ></Route>

          <Route path="/about"  element={<About />}  ></Route>


          <Route path="/hello"  element={<Hello />}  ></Route>

          <Route path="/login"  element={<LoginComponent />}  ></Route>



          <Route path="/*"  element={<Error />}  ></Route>



        </Routes>
  
      </BrowserRouter>



   </>
  );
}

export default App;
