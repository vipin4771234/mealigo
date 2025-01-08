import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Blog from './screens/Blog/Blog';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/invoiceUpload" element={<ProtectedRoute><Home /></ProtectedRoute>} /> */}
          <Route path="*" element={<Blog />} />
        </Routes>
    </div>
  );
}

export default App;
