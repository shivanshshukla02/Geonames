import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Charts from "./components/Charts";
import Reports from "./components/Reports";
// import YourDataComponent from "./components/YourDataComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reports />} />
        <Route path="/home" element={<Home />} />
        {/* // <Route path="/reports" element={<Reports />} />
        <Route path="/datacom" element={<YourDataComponent/>} /> */}
        
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;