import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// logo not used, removed to satisfy linter
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function BasicExample() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, seScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-togglar.icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active narbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}></Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active narbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active narbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/cliftonbenjamin' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={navIcon1} alt='LinkedIn icon'></img>
              </a>

              <a href='https://www.instagram.com/cliftonbenjamin' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={navIcon3} alt='Instagram icon'></img>
              </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;