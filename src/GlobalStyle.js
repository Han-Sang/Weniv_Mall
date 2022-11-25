import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

// ${reset} 으로 reset 스타일이 다 들어감
export const GlobalStyle = createGlobalStyle`
${reset}

html,body{
  font-family: "SpoqaHanSans", sans-serif;
  font-weight: 400;
}

button{
  padding: 0;
  margin: 0;
  background: none;
  border: none;
}

.hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%); 
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
}

`;
