import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { client, ContentfulProps } from '../utils/contentful'

import styled from 'styled-components'

export async function getStaticProps() {
  const headingRes = await client.getEntries({ content_type: 'navbar'})
  const awardRes = await client.getEntries({ content_type: 'cvAward'})
  const educationRes = await client.getEntries({ content_type: 'cvEducation'})
  const exhibitionRes = await client.getEntries({ content_type: 'cvExhibition'})

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

  return(
    <section>
      {renderHeadingSection()}
      {renderEducationSection()}
      {renderExhibitionSection()}
      {renderAwardSection()}
    </section>
  )
}

const CVSection = styled.div`

`

const TopText = styled.h2`

`

const Entry = styled.p`

`

export default CVPage
