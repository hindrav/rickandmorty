import { AppRoutes } from "routes";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { Footer } from "components";

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
