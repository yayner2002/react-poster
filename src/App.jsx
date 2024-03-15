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

const App = () => {
  return (
    <>
      <Router>
        <NavLinks />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/places" element={<PlacesScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
