import React from "react";
import { NavLink }  from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: #262626;

  h3 {
    padding-top: 30px;
    padding-bottom: 0;
    margin: 0;
    color: white;
    text-align: center;
  }
  ul{
    max-width: 400px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }
  li {
    display: inline-block;
    border-radius: 8px;
    transition: .3s ease background-color;
    &:hover{
      background-color: darkgray;
    }
  }
  a{
    font-family: TimesNew Roman;
    display: inline-block;
    padding: 1rem 1rem;
    font-size: 1rem;
    color: gray;
    outline: none;

    &.active {
      color: #fff;
    }
    @media (max-width: 768px) {
      position: static;
      padding: 0.5rem 0;
  
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      li {
        margin-bottom: 0.5rem;
      }
  }
  `
;

function Navbar(){
  return (
    <NavBarStyles>
      <h3>Matt Cook</h3>
      <ul>
        <li>
          <NavLink to='/about' activeClassName='active'>About Me</NavLink>
        </li>
        <li>
          <NavLink to='/portfolio' activeClassName='active'>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </li>
        <li>
        <NavLink to='/resume' activeClassName='active'>Resume</NavLink>
        </li>
      </ul>
    </NavBarStyles>


  )
}

export default Navbar;