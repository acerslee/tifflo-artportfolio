import type { NextPage } from 'next'
import styled from 'styled-components'
import { client, ContentfulProps} from '../utils/contentful'

export async function getStaticProps() {
  const headingRes = await client.getEntries({ content_type: 'navbar'})

  console.log(headingRes)
  return {
    props: {
      cvHeading: headingRes.items[0].fields
    }
  }
}

const ContactPage: NextPage<ContentfulProps> = ({ cvHeading }) => {
  return (
    <section>
      <EmailText>{cvHeading.email}</EmailText>
    </section>
  )
}

const EmailText = styled.h1`

`

export default ContactPage