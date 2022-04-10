import type { NextPage } from 'next'
import { client, ContentfulProps} from '../utils/contentful'

import styled from 'styled-components'

import PageContainer from '../ui/PageContainer'

export async function getStaticProps() {
  const aboutRes = await client.getEntries({ content_type: 'about'})

  return {
    props: {
      about: aboutRes.items[0].fields
    }
  }
}


const AboutPage: NextPage<ContentfulProps> = ({about}) => {
  return (
    <PageContainer>
      <AboutHeading>{about.heading}</AboutHeading>
      <AboutText>{about.text}</AboutText>
    </PageContainer>
  )
}

const AboutHeading = styled.div`
  text-align: center;
  font-size: 1.5rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`

const AboutText = styled.article`
  font-size: 1rem;
`

export default AboutPage