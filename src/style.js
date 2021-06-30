import styled,{createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle `
  *{
      outline: none;
      margin: 0;
      padding: 0;
}  
      
`;

export const Title = styled.h1 `
  color: white;
  font-size: 1.3vw;
`;

export const Container = styled.section `
  margin-left: 40%;
  margin-top: 5%;
  width: 20%;
  min-height: 40vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-size: 1vw;
  background: rgb(13, 20, 49);
  border-radius: 20px;
  border: solid rgb(255, 146, 4) 1px;
`;

export const BoxInputs = styled.div `
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input `
  padding: 0.6vw 0.1vw;
  border-radius: 2vw;
  font-size: 1vw;
  border: solid white 3px;
  margin-bottom: 1vw;
`;

export const BoxButtons = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
`;

export const Button = styled.button `
  width: 2.5vw;
  height: 2.5vw;
  font-size: 1vw;
  color: rgb (168,111,4);
  border: solid black 0.2vw;
  border-radius: 20vw;
  &:hover{
  background: rgb(13, 20, 49);
  color: white;
  }
`;

export const ButtonDel = styled.button `
  padding: 1vw 2vw;
  font-size: 1vw;
  color: rgb (168,111,4);
  border: solid black 0.2vw;
  border-radius: 2vw;
  &:hover{
    background: red;
    color: white;
    }
`;

export const InputResult = styled.input `
  padding: 0.8vw 0 2vw ;
  font-size: 1vw;
`;
