import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import NavigationBar from "./components/navbar/NavigationBar";
import Footer from "./components/footer/Footer";
import Details from "./components/details/Details";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <Router>
    <NavigationBar />
       <Routes>
          <Route path='/' element={<Home />}/>'
          <Route path='/about' element={<Details />}/>
          <Route path='/contact' element={<Contact />} />
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;
