import { useState } from "react";

import { HomePage } from "./Pages/Homepage/home";
import { BrowserRouter } from 'react-router-dom';
// import { AppRoutes } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
