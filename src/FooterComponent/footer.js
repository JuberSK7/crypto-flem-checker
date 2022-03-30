import React from "react";

import styled from 'styled-components';




 const Footer = () =>  {
    return(
        <FooterCont>
            
            <FooterWrapper>
                 <FooterRow>
                <FooterColumn>
                    <FooterTitle>Home </FooterTitle>
                    <FooterLink href='#'>Home</FooterLink>
                    <FooterLink href='#'>About</FooterLink>
                    <FooterLink href='#'>Contact</FooterLink>
                    <FooterLink href='#'>Sing in</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterTitle>About us </FooterTitle>
                    <FooterLink href='#'>Home</FooterLink>
                    <FooterLink href='#'>About</FooterLink>
                    <FooterLink href='#'>Contact</FooterLink>
                    <FooterLink href='#'>Sing in</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterTitle>Contact us </FooterTitle>
                    <FooterLink href='#'>Home</FooterLink>
                    <FooterLink href='#'>About</FooterLink>
                    <FooterLink href='#'>Contact</FooterLink>
                    <FooterLink href='#'>Sing in</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterTitle>Sing up </FooterTitle>
                    <FooterLink href='#'>Home</FooterLink>
                    <FooterLink href='#'>About</FooterLink>
                    <FooterLink href='#'>Contact</FooterLink>
                    <FooterLink href='#'>Sing in</FooterLink>
                </FooterColumn>
            </FooterRow>
            
            </FooterWrapper>
            <CopyHeading>CopyRight by Shaikhzubbu❤️</CopyHeading>

        </FooterCont>
    )
}

export default Footer;


// constant Style components properties   /////

 const FooterCont = styled.div`

padding: 80px 80px;
margin: 30px 0 0 0;
background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112, 71, 247, 1)100%);


`
const CopyHeading = styled.h3`
display: flex;
justify-content: center;
align-item: center;
margin-top: 64px;
font-size: 18px;
font-weight: 400;



`
 const FooterWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
const FooterRow = styled.div`
   
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }



`
 const FooterColumn = styled.div`
   
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-left: 60px;


`
 const FooterLink  = styled.div`
  
   color: #fff;
   cursor: pointer;
   margin-bottom: 20px;
   font-size: 18px;
   text-decoration: none;

   &:hover {
       color: #ff9c00;
       transition: 200ms ease-in; 
   }



`
const FooterTitle = styled.div`


color: black;
font-size: 22px;
text-decoration: none;
font-weight: 600;`