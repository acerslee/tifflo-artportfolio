import { FC, ReactElement } from 'react'
import Link from 'next/link'

type navTypes<S = string>= {
  item: S
  link: S
}

const navLinks = [
  {
    item: 'artworks',
    link: '/artworks'
  },
  {
    item: 'cv',
    link: '/cv'
  },
  {
    item: 'contact',
    link: '/contact'
  },
]

const Navbar: FC = () => {

  const renderNavItems = (): ReactElement[] => {
    return (
      navLinks.map((link: navTypes) => (
        <li key={link.item}>
          <Link href={link.link} passHref>
            {link.item}
          </Link>
        </li>
      ))
    )
  }

  return (
    <header>
      {renderNavItems()}
    </header>
  )
}

export default Navbar
