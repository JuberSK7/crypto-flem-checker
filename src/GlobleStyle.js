import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

`
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#00D395' : '#101522')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: 20px;
  color: ${({ col }) => (col ? '#fff' : '#101522')};
 
  border: none;
  cursor: pointer;



  &:hover {

    transition: all 0.3s ease-out;

    color: ${({ col }) => (col ? '#fff' : '#101522')};
    background-color: ${({ primary }) => (primary ? '#101522' : '#101522')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
}
`;

export const Container = styled.div`

z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 99px) {
    padding-right: 30px;
padding-left: 30px;
}
`


export default GlobalStyle;
