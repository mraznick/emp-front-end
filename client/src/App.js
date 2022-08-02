import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx"
import Pictures from "./screens/Pictures.jsx";
import CommentDetail from "./components/CommentDetail.jsx";
import Login from "./screens/Login.jsx";
import { PictureDetail } from "./screens/PictureDetail.jsx"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import Register from "./screens/Register.jsx";
import SignOut from "./screens/SignOut";

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await verifyUser();
      setUser(userData)
    }
    fetchUser();
  }, [])

  return (
    <div>
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/pictures" element={<Pictures />} />

        <Route path="/pictures/:id" element={<PictureDetail userId={user}/>} />

        {/* <Route path="/comments/:id" element={<CommentDetail />} /> */}

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/register" element={<Register setUser={setUser} />} />

        <Route path="/signout" element={<SignOut />} />

        {/* <Route path="/pictures/:id/edit" element={<PictureEdit />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
