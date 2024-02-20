import "./assets/styles/index.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import addRecipesToDatabase from "./data/seed";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    addRecipesToDatabase();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
