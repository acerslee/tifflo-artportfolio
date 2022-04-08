import type { NextPage } from 'next'
import { client, ContentfulProps} from '../utils/contentful'

import PageContainer from '../ui/PageContainer'

import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export async function getStaticProps() {
  const headingRes = await client.getEntries({ content_type: 'navbar'})

  return {
    props: {
      cvHeading: headingRes.items[0].fields
    }
  }
}

const ContactPage: NextPage<ContentfulProps> = ({ cvHeading }) => {
  return (
    <PageContainer>
      <Row style={{marginTop: '1rem'}}>
        <Col>
          <EmailText>{cvHeading.email}</EmailText>
        </Col>
      </Row>
    </PageContainer>
  )
}

const EmailText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`

export default ContactPage
