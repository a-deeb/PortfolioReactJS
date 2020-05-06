import React from 'react';
import ParticlesBg from 'particles-bg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import './App.css';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Ahmed Deeb',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home:{
        title: 'Ahmed Deeb',
        subTitle: 'Software Developer',
        text: "A passion driven and dependable software developer with a solid work ethic. Knowledgeable in a wide variety of computer languages as well as principles and techniques in development, debugging, system design, performance optimization, automation, code review, and unit testing."
      },
      about:{
        title: 'About Me:'
      },
      contact:{
        title: 'Reach Me:'
      }
       

    }
  }
  render(){  
    return (
      <div>  
      <Router>
        <Container className="p-0" fluid ={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
          <ParticlesBg type="square" bg={true} />
            <Navbar.Brand id="nav-brand">VisionPlayMedia</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/React-Portfolio">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
              </Navbar.Collapse> 
              </Navbar>
              <Route path = "/React-Portfolio" exact render= {() => <HomePage title ={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
              <Route path = "/about"  render= {() => <AboutPage title ={this.state.about.title} />}/>
              <Route path = "/contact"  render= {() => <ContactPage title ={this.state.contact.title} />}/>
              <Footer />
        </Container>
      </Router>
      </div>
    );
  }
}

export default App;
