import React, { Component } from 'react';
import styled, { injectGlobal,css, ThemeProvider } from 'styled-components';
import theme from './theme';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
    );
  }
}
//Container 내부의 모든 Card를 선택하고 싶다면
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  ${Card}{
    background-color: blue;
  }
`
//${Card}:last-child 등도 가능
const Card = styled.div`
  background-color: red;
`
const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`

const Form = () => (<Card><Button>Hello</Button></Card>)

export default App;