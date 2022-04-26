import type { NextPage } from 'next'

import { client, ContentfulProps} from '../utils/contentful'

import PageContainer from '../ui/PageContainer'

import Gallery from 'react-grid-gallery'

export async function getStaticProps() {
  const imagesRes = await client.getEntries({ content_type: 'rectangularImages' })

  return {
    props: {
      images: imagesRes.items
    }
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
        caption: image.fields.image.fields.title
      }
    )
  })

  return (
    <PageContainer>
      <Gallery images={renderImages} backdropClosesModal={true} />
    </PageContainer>
    )
}

export default Home
