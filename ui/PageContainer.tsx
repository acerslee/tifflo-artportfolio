import { FC, ReactNode } from 'react'

import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

type ContainerProps = {
  children: ReactNode
}

const PageContainer: FC<ContainerProps> = ({ children }) => {
  return (
    <Webpage fluid="md" sm={4} md={8} lg={12}>
      {children}
    </Webpage>
  )
}

const Webpage = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 5rem;
  @media (max-width: 1440px) {
    max-width: 90%;
  }
`

export default PageContainer
