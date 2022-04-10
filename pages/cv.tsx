import type { NextPage, GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { client, ContentfulProps } from '../utils/contentful'

import styled from 'styled-components'
import PageContainer from '../ui/PageContainer'
import Row from 'react-bootstrap/Row'

export async function getStaticProps() {
  const headingRes = await client.getEntries({ content_type: 'navbar'})
  const awardRes = await client.getEntries({ content_type: 'cvAward' })
  const educationRes = await client.getEntries({ content_type: 'cvEducation', order: 'sys.createdAt' })
  const exhibitionRes = await client.getEntries({ content_type: 'cvExhibition', order: 'sys.createdAt' })

  return {
    props: {
      cvHeading: headingRes.items[0].fields,
      cvAward: awardRes.items,
      cvEducation: educationRes.items,
      cvExhibition: exhibitionRes.items,
    }
  }
}

const CVPage: NextPage<ContentfulProps> = ({
  cvHeading,
  cvAward,
  cvEducation,
  cvExhibition,
}) => {

  const renderHeadingSection = (): ReactNode => {
    return(
      <CVSection>
        <TopText>{cvHeading.name}</TopText>
        <Entry>{cvHeading.email}</Entry>
      </CVSection>
    )
  }

  const renderEducationSection = (): ReactNode => {
    return(
      <CVSection>
        <TopText>Education</TopText>
        {cvEducation.map((entry: any, i: number) => (
          <Entry key = {i}>{entry.fields.education}</Entry>
          ))}
      </CVSection>
    )
  }

  const renderExhibitionSection = (): ReactNode => {
    return(
      <CVSection>
        <TopText>Selected Group Exhibition</TopText>
        {cvExhibition.map((entry: any, i: number) => (
          <Entry key = {i}>{entry.fields.data}</Entry>
          ))}
      </CVSection>
    )
  }

  const renderAwardSection = (): ReactNode => {
    return(
      <CVSection>
        <TopText>Awards</TopText>
        {cvAward.map((entry: any, i: number) => (
          <Entry key = {i}>{entry.fields.data}</Entry>
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

const TopText = styled.div`
  font-size: 1.5rem;
`

const Entry = styled.p`
  font-size: 1rem;
`

export default CVPage
