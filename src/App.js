import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import Articles from './Pages/Articles'
import Article1 from './Pages/Article1'
import Article2 from './Pages/Article2'
import Article3 from './Pages/Article3'
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Switch>
              <Route exact path="/"> 
                <Home/>
              </Route>
              <Route path="/articles"> 
                <Articles/>
              </Route>
              <Route path="/article1"> 
                <Article1/>
              </Route>
              <Route path="/article2"> 
                <Article2/>
              </Route>
              <Route path="/article3"> 
                <Article3/>
              </Route>
              <Route path="/chat"> 
                <Chat/>
                </Route>
              <Route path="/registration"> 
                <RegistrationPage/>
              </Route>
              <Route path="/about-us"> 
                <AboutUs/>
              </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
