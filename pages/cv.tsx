import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { client, ContentfulProps } from '../utils/contentful'

import styled from 'styled-components'
import { PageContainer, HeadingText, BodyText } from '../ui'
import Row from 'react-bootstrap/Row'
import { useMediaQuery } from '../hooks/useMediaQuery'

export async function getStaticProps() {
  try {
    const responses = await Promise.all([
      client.getEntries({ content_type: 'navbar' }),
      client.getEntries({ content_type: 'cvAward' }),
      client.getEntries({ content_type: 'cvEducation', order: 'sys.createdAt' }),
      client.getEntries({ content_type: 'cvExhibition', order: 'sys.createdAt' })
    ])

    return {
      props: {
        cvHeading: responses[0].items[0].fields,
        cvAward: responses[1].items,
        cvEducation: responses[2].items,
        cvExhibition: responses[3].items,
      }
    }
  } catch(e) {
    console.warn(e)
  }
}

const CVPage: NextPage<ContentfulProps> = ({
  cvHeading,
  cvAward,
  cvEducation,
  cvExhibition,
}) => {

  const isTabletSize = useMediaQuery('(max-width: 1024px)')
  const isMobileSize = useMediaQuery('(max-width: 711px)')

  const renderHeadingSection = (): ReactNode => {
    return(
      <CVSection>
        <HeadingText size={isTabletSize ? 'medium' :'large'}>{cvHeading.name}</HeadingText>
        <BodyText size={isMobileSize ? 'small' : 'medium'}>{cvHeading.email}</BodyText>
      </CVSection>
    )
  }

  const renderEducationSection = (): ReactNode => {
    return(
      <CVSection>
        <HeadingText size={isTabletSize ? 'medium' :'large'}>Education</HeadingText>
        {cvEducation.map((item: any, i: number) => (
          <BodyText
            key = {i}
            size={isMobileSize ? 'small' : 'medium'}
          >
            {item.fields.education}
          </BodyText>
          ))}
      </CVSection>
    )
  }

  const renderExhibitionSection = (): ReactNode => {
    return(
      <CVSection>
        <HeadingText size={isTabletSize ? 'medium' :'large'}>Selected Group Exhibition</HeadingText>
        {cvExhibition.map((item: any, i: number) => (
          <BodyText
            key={i}
            size={isMobileSize ? 'small' : 'medium'}
          >
            {item.fields.data}
          </BodyText>
          ))}
      </CVSection>
    )
  }

  const renderAwardSection = (): ReactNode => {
    return(
      <CVSection>
        <HeadingText size={isTabletSize ? 'medium' :'large'}>Awards</HeadingText>
        {cvAward.map((item: any, i: number) => (
          <BodyText
            key={i}
            size={isMobileSize ? 'small' : 'medium'}
          >
            {item.fields.data}
          </BodyText>
        ))}
      </CVSection>
    )
  }

  return(
    <PageContainer>
      <Row>
        {renderHeadingSection()}
      </Row>
      <Row>
        {renderEducationSection()}
      </Row>
      <Row>
        {renderExhibitionSection()}
      </Row>
      <Row>
        {renderAwardSection()}
      </Row>
    </PageContainer>
  )
}

const CVSection = styled.div`
  margin: 1rem 0;
`

export default CVPage
