import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
    text-decoration: none;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  min-width: 100%;
}

*::-webkit-scrollbar {
    width: 12px;
  }
  
  *::-webkit-scrollbar-track {
    background: #181717;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #E6E0E9;
    border-radius: 10px;
    border: 2px solid #181717;
  }
`
