import { useEffect, useState } from "react";
import Card from "./components/Card";
import ToggleBtn from "./components/ToggleBtn";

import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");



  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

// actual change in theme mode
  useEffect(() =>{
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(themeMode);
  }, [themeMode]);

  

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ToggleBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
