import { FC } from 'react'
import Container from 'react-bootstrap/Container'

const PageContainer: FC = ({ children }) => {
  return (
    <Container fluid>
      {children}
    </Container>
  )
}

export default PageContainer