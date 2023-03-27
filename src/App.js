import Navigation from './components/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
       <Navigation />
       <Header />
       <Services />
       <Portfolio />
       <About />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
  