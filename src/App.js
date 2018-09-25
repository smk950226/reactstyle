import React, { Component } from 'react';
import styled, { injectGlobal,css } from 'styled-components';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`
//card를 사용할 떄마다 쓰고싶은 스타일
const awsomeCard = css`
  box-shadow: 0 4px 6px rgba(50,50,50,0.11), 0 1px 3px rgba(0,0,0,0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

class App extends Component {
  render() {
    return (
    <Container>
      <Input />
    </Container>
    );
  }
}

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awsomeCard};
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`

export default App;