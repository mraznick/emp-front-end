import "./App.css";
import Nav from "./components/Nav.jsx";
import Pictures from "./screens/Pictures.jsx";
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
        {/* Elements/Screens aren't made yet;
        unsure if we want to create paths for adding a comment/editing a picture */}
      </Routes>
    </div>
  );
}

export default App;
