import type { NextPage } from 'next'

import { client, ContentfulProps} from '../utils/contentful'

import PageContainer from '../ui/PageContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Gallery from 'react-grid-gallery'

export async function getStaticProps() {
  try {
    const imagesRes = await client.getEntries({ content_type: 'rectangularImages', order: 'fields.title' })

    return {
      props: {
        images: imagesRes.items
      }
    }
  } catch(e) {
    console.warn(e)
  }
}

type ContentfulImageTypes = {
  src: string
  thumbnail: string
  thumbnailWidth: number
  thumbnailHeight: number
  caption: string
}

const Home: NextPage<ContentfulProps> = ({ images }) => {
  const renderImages = images.map((image: any): ContentfulImageTypes => {
    return (
      {
        src: `https:${image.fields.image.fields.file.url}`,
        thumbnail: `https:${image.fields.image.fields.file.url}`,
        thumbnailWidth: image.fields.image.fields.file.details.image.width,
        thumbnailHeight: image.fields.image.fields.file.details.image.height,
        caption:
          `${image.fields.title}, ${image.fields.mediums} - (${image.fields.photoCredits})`
      }
    )
  })

  return (
    <PageContainer>
      <Row>
        <Col>
          <Gallery images={renderImages} backdropClosesModal={true} />
        </Col>
      </Row>
    </PageContainer>
    )
}

export default Home
