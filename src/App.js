import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import { Banner } from './components/banner';
import { Skills } from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
