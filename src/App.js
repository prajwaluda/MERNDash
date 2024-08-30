import { CssBaseline,ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Dashboard from "./scenes/Dashboard";
import Layout from "./scenes/Layout";
import Products from "./scenes/Products";
import Customers from "./scenes/Customers";
import Transactions from "./scenes/Transactions";
import Geography from "./scenes/Geography";
import Overview from "./scenes/Overview";
import Dailydata from "./scenes/Daily";
import Monthlydata from "./scenes/Monthly";
import Breakdowndata from "./scenes/Breakdown";
import Adminsdata from "./scenes/Admins";
import Performance from "./scenes/Performance";


function App() {
  const mode=useSelector((state)=>state.global.mode);
  const theme =useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
                <Route path="/geography" element={<Geography/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="/daily" element={<Dailydata/>}/>
                <Route path="/monthly" element={<Monthlydata/>}/>
                <Route path="/Breakdown" element={<Breakdowndata/>}/>
                <Route path="/admin" element={<Adminsdata/>}/>
                <Route path="/performance" element={<Performance/>}/>
              </Route>
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
