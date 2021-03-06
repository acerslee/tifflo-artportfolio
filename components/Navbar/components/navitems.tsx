import { FC } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  @media (max-width: 1024px) {
    height: 100vh;
    display: none;
    position: fixed;
    top: 6rem;
    left: 0rem;
    z-index: 3;
  }
`

const NavItem = styled.li`
  list-style: none;
  margin-left: 3em;
  @media (max-width: 1024px) {
    padding-top: 3em;
  }
`

const NavText = styled.span`
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  font-size: 1rem;
  &: hover {
    color: ${({ theme }) => theme.colors.lightOrange};
    text-decoration-color: ${({ theme }) => theme.colors.lightOrange};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`

const InstagramLogo = styled(FaInstagram)`
  font-size: 2.5rem;
  transition: color 500ms;
  &: hover {
    color: ${({ theme }) => theme.colors.lightOrange};
    cursor: pointer;
  }
`

const NavItems: FC = () => {

  return (
    <NavMenu id="nav_menu">
      <NavItem className="nav_item">
        <Link href="/" passHref>
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
        <a
          href="https://www.instagram.com/hoi.dontmakesense/"
          rel="noreferrer"
          target="_blank"
          style={{
            color: '#000000'
          }}
        >
          <InstagramLogo />
        </a>
      </NavItem>
    </NavMenu>
  )
}

export default NavItems
