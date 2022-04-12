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
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 0.5rem 0;
`

const CopyrightText = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
  color: #ffffff;
`

export default Footer
