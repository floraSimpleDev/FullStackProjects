import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import Second from "./layouts/secondLayout";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Second>
              <Register />
            </Second>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Second>
              <SignIn />
            </Second>
          }
        />

        {isLoggedIn && (
          <>
            <Route
              path="/add-hotel"
              element={
                <Second>
                  <AddHotel />
                </Second>
              }
            />

            <Route
              path="/my-hotels"
              element={
                <Second>
                  <MyHotels />
                </Second>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
