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
          <ImageContainer key={image.fields.image.sys.id}>
             <Image
              src={`https:${image.fields.image.fields.file.url}`}
              layout="fill"
              objectFit='contain'
            />
          </ImageContainer>
        )
      })
    )
  }


  return (
    <PageContainer>
      {renderImages()}
    </PageContainer>
    )
}

const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
`

export default Home
