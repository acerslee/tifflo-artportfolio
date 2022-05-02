import type { NextPage } from 'next'
import { client, ContentfulProps} from '../utils/contentful'

import PageContainer from '../ui/PageContainer'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { HeadingText } from '../ui'
import { useMediaQuery } from '../hooks/useMediaQuery'

export async function getStaticProps() {
  try {
    const headingRes = await client.getEntries({ content_type: 'navbar'})

    return {
      props: {
        cvHeading: headingRes.items[0].fields
      }
    }
  } catch(e) {
    console.warn(e)
  }
}

const ContactPage: NextPage<ContentfulProps> = ({ cvHeading }) => {
  const isTabletSize = useMediaQuery('(max-width: 1024px)')

  return (
    <PageContainer>
      <Row>
        <Col>
          <HeadingText
            size={isTabletSize ? 'small' : 'medium'}
            weight={'bold'}
          >
            {cvHeading.email}
          </HeadingText>
        </Col>
      </Row>
    </PageContainer>
  )
}

export default ContactPage
