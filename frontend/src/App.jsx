import "./App.css";
import { Routes, Route } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import Card from "./Card.jsx"
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="article/*" element={<ArticleDetails />}></Route>
        <Route path="/music" element={<ArticleList category={`music`} />}></Route>
        <Route path="/sports" element={<ArticleList category={`sports`} />}></Route>
        <Route path="/games" element={<ArticleList category={`games`} />}></Route>
        <Route path="/travel" element={<ArticleList category={`travel`} />}></Route>
      </Routes>

      <Card />

      <Footer />
    </>
  );
}

export default App;
