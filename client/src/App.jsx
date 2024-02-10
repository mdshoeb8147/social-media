import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./scenes/homePage/Home";
import Login from "./scenes/loginPage/Login";
import ProfilePage from "./scenes/profilePage/ProfilePage";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
