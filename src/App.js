import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Banner from "./components/Banner";
import FullBlog from "./components/FullBlog";
import Navbar from "./components/Navbar";
import AddBlog from "./components/AddBlog";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Blogs />
              </>
            }
          />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blog/:blogName" element={<FullBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
