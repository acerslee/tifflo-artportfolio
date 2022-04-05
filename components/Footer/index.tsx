import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  const currentYear =  new Date().getFullYear()

  return (
    <FooterContainer>
      ©{currentYear} H.C. Tiffany Lo
    </FooterContainer>
  )
}

const FooterContainer = styled.footer``

export default Footer