import { FC } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  background-color: white;
  @media (max-width: 1024px) {
    height: 100vh;
    display: none;
    position: fixed;
    top: 7rem;
    width: 100%;
    padding-left: 1.625rem;
    left: 0rem;
  }
`

const NavItem = styled.li`
  list-style: none;
  margin-left: 3em;
  @media (max-width: 1024px) {
    margin-left: 0;
    padding-top: 3em;
  }
`

const NavText = styled.span`
  font-size: 1rem;
  &: hover {
    color: orange;
    cursor: pointer;
  }
`

const InstagramLogo = styled(FaInstagram)`
  font-size: 2.5rem;
  &: hover {
    color: orange;
    cursor: pointer;
  }
`

const NavItems: FC = () => {

  return (
    <NavMenu id="nav_menu">
      <NavItem className="nav_item">
        <Link href="/artwork" passHref>
          <NavText>Artwork</NavText>
        </Link>
      </NavItem>
      <NavItem className="nav_item">
        <Link href="/about" passHref>
          <NavText>About</NavText>
        </Link>
      </NavItem>
      <NavItem className="nav_item">
        <Link href="/cv" passHref>
          <NavText>CV</NavText>
        </Link>
      </NavItem>
      <NavItem className="nav_item">
        <Link href="/contact" passHref>
          <NavText>Contact</NavText>
        </Link>
      </NavItem>
      <NavItem className="nav_item">
        <InstagramLogo />
      </NavItem>
    </NavMenu>
  )
}

export default NavItems
