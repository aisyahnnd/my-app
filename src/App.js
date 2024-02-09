import "./App.css";
import AboutComponent from "./components/AboutComponent";
import CompanyProfile from "./components/CompanyProfile";
import HomeComponent from "./components/HomeComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MyContextProvider } from "./context";

function App() {
  const companyData = {
    name: "PT Indodev Niaga Internet",
    address: "Jl Tegal Rotan Raya",
  };

  

  return (
    <MyContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route
              path="/company"
              element={<CompanyProfile companyData={companyData} />}
            />
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
}

export default App;
