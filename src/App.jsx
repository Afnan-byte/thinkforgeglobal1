import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './Components/Blog/BlogPostPage';
import ConnectPage from './pages/ConnectPage';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/connect" element={<ConnectPage/>}/>
            <Route path="/careers" element = {<CareersPage/>}/> 
            <Route path="/blog" element = {<BlogPage/>} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
