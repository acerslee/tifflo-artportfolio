import type { NextPage } from 'next'
import Image from 'next/image'
import { ReactNode } from 'react'

import { client, ContentfulProps} from '../utils/contentful'

import PageContainer from '../ui/PageContainer'
import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export async function getStaticProps() {
  const imagesRes = await client.getEntries({ content_type: 'rectangularImages'})

  return {
    props: {
      images: imagesRes.items
    }
  }
}

const Home: NextPage<ContentfulProps> = ({ images }) => {

  const renderImages = (): ReactNode => {
    return(
      images.map((image: any) => {
        return(
          <ImageContainer
            key={image.fields.image.sys.id}
            sm={image.fields.isRectangular ? 4 : 2}
          >
             <Image
              src={`https:${image.fields.image.fields.file.url}`}
              layout="fill"
              objectFit='contain'
              alt={image.fields.image.fields.title}
            />
          </ImageContainer>
        )
      })
    )
  }

  return (
    <PageContainer>
      <Row xs={'auto'}>
        {renderImages()}
      </Row>
    </PageContainer>
    )
}

const ImageContainer = styled(Col)`
  position: relative;
  height: 255px;
  margin: 0 1rem;
  @media (max-width: 1024px) {
    height: 150px;
  }
  @media (max-width: 711px) {
    height: 100px;
  }
`

export default Home
