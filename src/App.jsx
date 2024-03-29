import Footer from "./components/Footer";
import PostList from "./components/PostList";

import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import NavLinks from "./components/NavLinks";
import PlacesScreen from "./Screens/PlacesScreen";
import HomeScreen from "./Screens/HomeScreen";
import AllPosts from "./Screens/AllPosts";
import PostProvider from "../context/PostContext";
import Login from "./components/Login";
import Logout from "./components/Logout";

const App = () => {
  return (
    <>
      <PostProvider>
        <Router>
          <NavLinks />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/places" element={<PlacesScreen />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </Router>
      </PostProvider>
    </>
  );
};

export default App;
