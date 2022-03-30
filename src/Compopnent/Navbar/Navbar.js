import React, { useState } from "react";
import styled from 'styled-components'
import { GiFrozenBlock } from 'react-icons/gi'
import  { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { Container } from "../../GlobleStyle";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return(
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
       <Nav>
           <NavbarConatiner>
               <NavLogo to='/'>
                 <IconLog style={{
     color: '#00D395'
    }} />
                 CRYPTOFLEM
              </NavLogo>
              <MenuIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars/>}
              </MenuIcon>

           <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                      <NavLinks to='/'>Home</NavLinks>
                  </NavItem>
           
                  <NavItem>
                      <NavLinks to='/'>About</NavLinks>
                  </NavItem>
              
          
                  <NavItem>
                      <NavLinks to='/'>Platform</NavLinks>
                  </NavItem>
         
              
                  <NavItem>
                      <NavLinks to='/'>Services</NavLinks>
                  </NavItem>
              </NavMenu>

           </NavbarConatiner>
       </Nav>
       </IconContext.Provider>
        </div>
    )
}

export default Navbar;

// constant Style components properties   /////

 const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-item: center;
  postion: sticky;
  font-size: 1.2rem;
  z-index: 999;
  top: 0;
`;

const NavbarConatiner = styled(Container)`

display: flex;
justify-content: space-between;
height: 80px;


${Container}
`;


const NavLogo = styled(Link)`
display; flex;
align-item; center;
justify-self: flex-start;
corsur: pointer;
font-size: 1.6rem;
color: #fff;
text-decoration: none;
`;

const IconLog = styled(GiFrozenBlock)`
margin-right: 0.5rem;
margin-top: 24px;
`;

const MenuIcon = styled.div`
display: none;



@media screen and (max-width: 980px) {
    display: block;
    position: absolute;
    font-size: 1.2rem;
    cursore: pointer;
    transform: translate(-100%, 60%);
    top: 0;
    right: 0;

  
   
}
`;
const NavMenu = styled.div`
display: flex;
align-item; center;
text-align: center;
line-style: none;


@media screen and (max-width: 980px) {
    display: block;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    left: ${({ click }) => (click ? 0 : '-100%')};

}
`;
const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

@media screen and (max-width: 980px) {
    width: 100%;

    &:hover {
 
        border: none;
    }
} 

`;

const NavLinks = styled(Link)`
height: 100%;
color: #fff;
display: flex;
align-item: center;
text-decoration: none;
padding: 0.3rem 3rem;

@media screen and (max-width: 980px) {
    
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
}
&:hover {
    color: #00D395;
    transition: all 0.3s ease;
}


`;