import { React, useState, useEffect } from "react"
import { HashRouter, Router, Routes, Route, useLocation } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeContext } from "./utils/ThemeContext"
import Main from "./pages/Main"
import Shop from "./pages/Shop"

import { lightTheme, darkTheme } from "./utils/Theme";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  const [theme, setTheme] = useState("light")

  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <ThemeProvider theme={muiTheme}>
    //     <CssBaseline />
    //       <HashRouter>
    //         <ScrollToTop />
    //         <Routes>
    //           <Route exact path="/" element={<Main />} />
    //           <Route path="/shop" element={<Shop />} />
    //         </Routes>
    //       </HashRouter>
    //   </ThemeProvider>
    // </ThemeContext.Provider>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline>
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<Main />} />
            </Routes>
          </HashRouter>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
