import { useCallback } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import myGif from "./assets/images/myGif.gif";

function App() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/password");
  }, []);
  return (
    <div className="App">
      <div
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/72/f8/ff/72f8ffaf51f257a864786cb78fc3121f.gif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition:'center'
        }}
      ></div>
      <div>
        <div className="nameClass">
          <h2 style={{ color: "#fff" }}>Mohameda Basith</h2>
          <h4 style={{ color: "#fff" }}>Fullstack Developer</h4>
          <button className="buttonTask" onClick={handleNavigate}>
            VIEW TASK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
