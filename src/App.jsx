import { useState } from "react";
import { HomePage } from "./Pages/Homepage/home";
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "./Routes";
import Login from "./pages/login/login";
// import { AppRoutes } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
    
  );
}

export default App;
