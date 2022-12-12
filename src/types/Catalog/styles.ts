import styled from "styled-components";
export const Container = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  color: #797a81;
  min-height: 100vh;
`;
export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;
export const Header = styled.h1`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  text-align: center;
  color: #f6c508;
  //text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  text-shadow: black 0.1em 0.1em 0.2em;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  //background-color: white;
  border-radius: 5px;
  height: 50px;
  font-size: 50px;

  img {
    width: 40px;
    margin-left: 20px;
    cursor: pointer;
  }
`;
export const Show = styled.h1`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  text-align: center;
  color: #f6c508;
  //text-shadow: black 0.1em 0.1em 0.2em;
  padding-top: 20px;
  padding-bottom: 20px;
  //justify-content: center;
  display: flex;
  //align-items: center;
  background-color: white;
  border-radius: 5px;
  height: 500px;
  overflow-y: scroll;
  img {
    width: 40px;
    margin-left: 20px;
    cursor: pointer;
  }
  ul {
    text-align: start;
    text-decoration: none;
    color: violet;
    font-size: 20px;
  }
  a {
    color: gray;
    text-decoration: none;
  }
`;
