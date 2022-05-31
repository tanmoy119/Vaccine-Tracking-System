import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Logo from './Logo';

function Navbar() {
  return (
      <Nav>
          <Link  href='/' ><LogoDiv><Logo/></LogoDiv></Link>
          <NavManu>
              <Link href='/'><a><span>Home</span></a></Link>
              <Link href='/'><a><span>Vaccine Tracker</span></a></Link>
              <Link href='/'><a><span>About</span></a></Link>
              <Link href='/'><a><span>Prevent</span></a></Link>
              <Link href='/'><a><span>Experts</span></a></Link>
              <Link href='/'><a><span>Contact Us</span></a></Link>
              <Link href='/'><a><span>Blogs</span></a></Link>

          </NavManu>

          <Link href='/profile'><ProfileImg src='https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419' /></Link>



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
color:#eee;



`
const LogoDiv = styled.div`
height:70px;
cursor: pointer;
position:relative;
left:28px;
top:0px;
`

const ProfileImg = styled.img`
cursor: pointer;
position: fixed;
right: 20px;
height: 38px;
width:38px;
border-radius: 50%;
`

const NavManu = styled.div`
    display: flex;
    position: absolute;
    right: 100px;
   

    a{
        color: #eee;

        text-decoration: none;
        

        span{
            font-size: 18px;
            letter-spacing: 0.05px;
            cursor: pointer;
            
            margin: 0 10px;
            position: relative;

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

        }
            
            &:hover{
                span:after {
                    opacity: 1;
                    transform:scaleX(1);
                  }
            }

    }

`