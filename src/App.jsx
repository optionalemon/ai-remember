import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase_setup/FirebaseConfig";
import { Login, Landing, Forget, Signup, Verify, Communities, Diary, Conversation } from "./pages";
import { useEffect } from "react";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const ProtectedRoute = ({ redirectPath = "/login", children }) => {
    const [user] = useAuthState(auth);
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setCookie = {setCookie} cookies = {cookies}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/verify" element={<Verify />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/diary" element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
