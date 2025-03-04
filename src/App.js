import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import NavigationBar from "./components/navbar/NavigationBar";


function App() {
  return (
    <Router>
    <NavigationBar />
       <Routes>
          <Route path='/' element={<Home />}/>
       </Routes>
    </Router>
  );
}

export default App;
