import { ApolloProvider } from "@apollo/client";
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import InfoCard from "./pages/InfoCard";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import SearchResult from "./pages/SearchResult";
import Watchlist from "./pages/Watchlist"

function App() {
  // useEffect(() => {
  //   fetch("https://imdb-api.com/en/API/Top250Movies/k_ws4zcg2h")
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error(res.statusText)
  //     } 
  //     return res.json()
    
  //   }).then((data) => {
  //     console.log(data)
  //   }).catch(console.log)
  // }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/infocard" element={<InfoCard />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/watchlist" element={<Watchlist />} />
            {/* Use <RequiredAuth> for pages that should only be accessible to a
            user that has logged in.*/}
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPageExample />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
