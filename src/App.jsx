import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

// The function that contains the whole functionality
function App() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light"); // light or dark

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  
  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className={`app ${theme}`}>
      <div className="calculator">
        <h1>React Calculator </h1>

        {/* Theme Toggle */}
        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* Display */}
        <Display input={input} />

        {/* Buttons */}
        <div className="buttons">
          <Button label="AC" onClick={handleClear} className="clear" />
          <Button label="÷" onClick={() => handleClick("/")} />
          <Button label="×" onClick={() => handleClick("*")} />
          <Button label="−" onClick={() => handleClick("-")} />

          {[7, 8, 9].map((n) => (
            <Button key={n} label={n} onClick={() => handleClick(n)} />
          ))}
          <Button label="+" onClick={() => handleClick("+")} />

          {[4, 5, 6].map((n) => (
            <Button key={n} label={n} onClick={() => handleClick(n)} />
          ))}
          
          {[0,1, 2, 3].map((n) => (
            <Button key={n} label={n} onClick={() => handleClick(n)} />
          ))}
          <Button label="=" onClick={handleResult} className="equals" />

          <Button label="." onClick={() => handleClick(".")} />

          <Button label="Done" onClick={() => handleClick("Hello I'm Solomon")} />
        </div>
      </div>
    </div>
  );
}

export default App;
