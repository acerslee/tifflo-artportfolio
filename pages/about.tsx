import type { NextPage } from 'next'
import { client, ContentfulProps} from '../utils/contentful'

import styled from 'styled-components'

import { useMediaQuery } from '../hooks/useMediaQuery'

import { PageContainer, HeadingText, BodyText } from '../ui'

export async function getStaticProps() {
  try {
    const aboutRes = await client.getEntries({ content_type: 'about'})

    return {
      props: {
        about: aboutRes.items[0].fields
      }
    }
  } catch(e) {
    console.warn(e)
  }
}

const AboutPage: NextPage<ContentfulProps> = ({about}) => {
  const isTabletSize = useMediaQuery('(max-width: 1024px)')

  return (
    <PageContainer>
      <HeadingText
        align='center'
        size={isTabletSize ? 'medium' : 'large'}
      >
        {about.heading}
      </HeadingText>
      <BodyText size={'medium'}>{about.text}</BodyText>
      <Divider />
      <BodyText size={'medium'}>{about.chineseText}</BodyText>
    </PageContainer>
  )
}

const Divider = styled.div`
  margin: 2rem 0;
`

export default AboutPage
