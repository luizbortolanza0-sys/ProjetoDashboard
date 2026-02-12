import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import  Home  from "./Home"
import { lightTheme, darkTheme } from "./theme/theme"
import { useState } from "react"


function App() {
  
  const [mainTheme, setMainTheme] = useState(darkTheme)
  
  function toggleTheme( event : React.ChangeEvent<HTMLInputElement, Element>, checked : boolean){
    setMainTheme(checked?darkTheme:lightTheme);
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline/>
      <Home toggleTheme={toggleTheme}/>
    </ThemeProvider>
  )
}

export default App
