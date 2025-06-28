import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SwipeNavigator from "./components/SwipeNavigator";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SwipeNavigator />
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
