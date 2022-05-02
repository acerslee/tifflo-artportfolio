import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  const currentYear =  new Date().getFullYear()

  return (
    <FooterContainer>
      <CopyrightText>©{currentYear} H.C. Tiffany Lo</CopyrightText>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  padding: 0.5rem 0;
  @media (min-width: 1025px) {
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 711px) {
    margin-top: 0.5rem;
  }
`

const CopyrightText = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 0.8rem 0;
`

export default Footer
