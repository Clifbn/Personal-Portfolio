import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import { Banner } from './components/banner';
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Video } from './components/Video'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Video />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
