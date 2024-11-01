import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Mainpage from './components/main/MainPage'
const App = () => {
  return (
    <Router>
      <Nav/>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />




      </Routes>
    </Router>
  );
};

export default App;
