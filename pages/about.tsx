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
      <ContentText>{about.text}</ContentText>
      <Divider />
      <ContentText>{about.chineseText}</ContentText>
    </PageContainer>
  )
}

const AboutHeading = styled.div`
  text-align: center;
  font-size: 2rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`

const ContentText = styled.div`
  font-size: 1.2rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`

const Divider = styled.div`
  margin: 2rem 0;
`

export default AboutPage
