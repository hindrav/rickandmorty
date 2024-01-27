import { AppRoutes } from "routes";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
