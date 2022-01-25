import {useState, useEffect} from "react"
import styled, {ThemeProvider} from "styled-components";


const themeDefault = {
colorPrimary: "rebeccapurple",
};

const themeDark = {
 id: "dark",
  colorBackground: "black",
  colorText: "white"
};

const themeLight = {
  id: "light",
  colorBackground: "white", 
  colorText: "black"
};

const StyledWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: ${p => p.theme.colorBackground};
color: ${p => p.theme.colorText};
transition : background 0.35s;
`

const StyledButton = styled.button`
background: ${(p) => p.theme.colorPrimary};
color: white;
`;

function App() {


  const [theme, setTheme] = useState(themeDefault);

  const handleThemeToggled = () => {
    if (theme.id === "dark") {
      setTheme({
        ...themeDefault,
        ...themeLight,
      })
    } else {
      setTheme({
        ...themeDefault,
        ...themeDark,
      })
    }
  }

useEffect(() => {
  setTheme({
    ...themeDefault, ...themeLight
  })
}, [])

  return (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
 <StyledButton onChangeClick ={handleThemeToggled}>Toggle Theme</StyledButton>
 </StyledWrapper>
 </ThemeProvider>
  );
}

export default App;
