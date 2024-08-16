import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { NewsContextProvider } from "../contexts/NewsContext";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Navbar3 from "./components/Navbar3";
import NewsPage from "./components/News";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";
import StockHeader from "./components/StockHeader";
 
const API_BASE_URL = "http://localhost:3000";

const App = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNewsItems, setFilteredNewsItems] = useState([]);

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/news`);
      setNewsItems(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [newsItems, searchQuery]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredNewsItems(filteredNews);
    } else {
      setFilteredNewsItems(newsItems);
    }
  }, [filteredNews, newsItems, searchQuery]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <NewsContextProvider
              value={{
                newsItems,
                setNewsItems,
                isLoading,
                setLoading,
                fetchNews,
                setSearchQuery,
                searchQuery,
                filteredNewsItems,
                setFilteredNewsItems,
              }}
            >
              <Navbar3 />
              <StockHeader/>
                <div style={{ paddingTop: "50px" }}></div>
              <NewsPage key={filteredNewsItems.length} />
              <Footer/>
            </NewsContextProvider>
          }
        />
        <Route path="/about" element={[<Navbar2 />, <About />, <Footer/>]} />
        <Route path="/contact" element={[<Navbar2 />, <ContactUs />, <Footer/>]} />
        <Route path="/login" element={[<Navbar2 />, <Login />, <Footer/>]} />
        <Route path="/register" element={[<Navbar2 />, <Register />, <Footer/>]} />
        <Route
          path="/login/user"
          element={
            <NewsContextProvider
              value={{
                newsItems,
                setNewsItems,
                isLoading,
                setLoading,
                fetchNews,
                setSearchQuery,
                searchQuery,
                filteredNewsItems,
                setFilteredNewsItems,
              }}
            >
              <Navbar1 />
              <NewsPage key={filteredNewsItems.length} />
              <Footer/>
            </NewsContextProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
