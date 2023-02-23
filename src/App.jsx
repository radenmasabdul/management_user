import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./redux/context";

import Dashboard from "./pages/Dashboard";
import Master from "./pages/Master";

const App = () => {
  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/master" element={<Master />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
