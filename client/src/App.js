import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx"
import Pictures from "./screens/Pictures.jsx";
import { PictureDetail } from "./screens/PictureDetail.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/pictures" element={<Pictures />} />

        <Route path="/pictures/:id" element={<PictureDetail />} />

        {/* <Route path="/add-comment" element={<AddComment />} />

        <Route path="/pictures/:id/edit" element={<PictureEdit />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
