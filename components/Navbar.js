import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Logo from './Logo';

function Navbar() {
  return (
      <Nav>
          <Link href='/' ><LogoDiv><Logo/></LogoDiv></Link>
          <NavManu>
              <Link href='/'><span>Home</span></Link>
              <Link href='/'><span>Vaccine Tracker</span></Link>
              <Link href='/'><span>About</span></Link>
              <Link href='/'><span>Prevent</span></Link>
              <Link href='/'><span>Experts</span></Link>
              <Link href='/'><span>Contact Us</span></Link>
              <Link href='/'><span>Blogs</span></Link>

          </NavManu>



      </Nav>
    
  )
}

export default Navbar;

const Nav = styled.div`
height: 70px;
width: 100vw;
background-color: #1e1e30;
display: flex;
align-items: center;



`
const LogoDiv = styled.div`
height:70px;
cursor: pointer;
position:relative;
left:28px;
top:0px;
`

const NavManu = styled.div`
    display: flex;
    position: absolute;
    right: 100px;

        span{
            font-size: 18px;
            letter-spacing: 0.05px;
            cursor: pointer;
            text-decoration: none;
            margin: 10px;

            &:after{
                content:"";
                height:2px;
                background: #fff;
                position: absolute;
                left: 0px;
                right: 0px;
                bottom: -4px;
                opacity: 0;
                transform-origin: left;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }

            &:hover{
                span:after {
                    opacity: 1;
                    transform: scaleX(1);
                  }
            }
        }

`