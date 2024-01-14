import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Lists from "./components/Lists";
import FormList from "./components/FormList";

function App() {
  const [isPopUp, setIsPopUp] = useState(false);

  return (
    <div
      className="Pages"
      style={{
        // opacity: isPopUp ? "0.7" : "1",
        backgroundColor: isPopUp && "rgba(255, 255, 255, 0.5)",
        height: "100dvh",
      }}
    >
      <Header />
      <Lists isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
    </div>
  );
}

export default App;
