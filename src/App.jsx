import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Loader from './components/loader/loader';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePages';
import CareersPage from './pages/careersPage';
import BlogPage from './pages/blogPage';
import BlogPostPage from './components/blog/blogPostPage';
import ConnectPage from './pages/connectPage';
import Navbar from './components/navbar/navbar';
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
            <Route path="/careers" element = {<CareersPage/>} />
            <Route path="/blog" element = {<BlogPage/>} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
