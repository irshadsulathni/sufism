import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PDFPage from "./pages/PDFPage";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyles";
import Footer from "./components/Footer"; // Ensure Footer is used

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pdf" element={<PDFPage />} />
      </Routes>
      <Footer /> {/* Added Footer Component */}
    </Router>
  );
}

export default App;
