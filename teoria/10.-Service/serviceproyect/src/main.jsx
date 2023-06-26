import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CheckCode,
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  Profile,
  Register,
} from "./pages";
import { AuthContextProvider } from "./context/authContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyCode" element={<CheckCode />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
);
