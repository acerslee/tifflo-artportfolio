import { useState, useEffect, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import hamburger from '../../public/hamburger.png'
import vector from '../../public/vector.png'
import logo from '../../public/logo.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

import { useMediaQuery } from '../../hooks/useMediaQuery'

import NavItems from './components/navitems'

const Navbar: FC = () => {

  const [toggleHamburger, setToggleHamburger] = useState<boolean>(true)

  const isTabletSize = useMediaQuery('(max-width: 1024px)')
  const isMobileSize = useMediaQuery('(max-width: 711px)')

  useEffect(() => {
    const element = document.getElementById('nav_menu')
    const status = element?.classList.contains('active')
    if (!status && !toggleHamburger) {
      setToggleHamburger(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabletSize])

  const toggleNavMenu = (): void => {
    setToggleHamburger(!toggleHamburger)
    const element = document.getElementById('nav_menu')
    element?.classList.toggle('active')
  }

  const closeMenu = (): void => {
    setToggleHamburger(!toggleHamburger)
    const element = document.getElementById('nav_menu')
    element?.classList.remove('active')
  }

  if (isTabletSize) {
    const item = document.querySelectorAll('.nav_item')
    item.forEach((n) => n.addEventListener('click', closeMenu))
  }

  let heightSize: number = 80
  let widthSize: number = 225

  if (isMobileSize) {
    heightSize = 40
    widthSize = 110
  } else if (isTabletSize) {
    heightSize = 60
    widthSize = 170
  }

  return (
    <Header fluid="md" sm={4} md={8} lg={12}>
      <Nav>
        <Col xs={'auto'} lg={2} className="nav_item">
          <Link href={'/'} passHref>
            <a>
              <Image
                src={logo}
                alt="Main logo for HCTiffLo"
                height={heightSize}
                width={widthSize}
              />
            </a>
          </Link>
        </Col>

        {isTabletSize ? (
          <NavItems />
        ) : (
          <Col xs={'auto'} md={4} lg={4}>
            <NavItems />
          </Col>
        )}

        {/* Convert to hamburger style menu when resolution is tablet size or smaller */}
        {isTabletSize && (
          <RightNavItem sm={2} md={4}>
            <Image
              src={toggleHamburger ? hamburger : vector}
              alt="Higi navbar icon to show or hide the nav items when clicked"
              width={toggleHamburger ? 21 : 16.33}
              height={toggleHamburger ? 14 : 16.33}
              onClick={() => toggleNavMenu()}
            />
          </RightNavItem>
        )}
      </Nav>
    </Header>
  )
}

const Header = styled(Container)`
  @media (max-width: 1440px) {
    max-width: 90%;
  }
  @media (max-width: 1024px) {
    & .active {
      display: block;
    }
  }
`

const Nav = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #aeb6c6;
`

const RightNavItem = styled(Col)`
  align-self: center;
  text-align: right;
`

export default Navbar
