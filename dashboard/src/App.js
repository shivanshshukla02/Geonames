import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Reports from "./components/Reports";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reports />} />
        
        
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;
