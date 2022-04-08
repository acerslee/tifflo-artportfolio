import type { NextPage } from 'next'
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


const AboutPage: NextPage<ContentfulProps> = () => {
  return (
    <article>

    </article>
  )
}

export default AboutPage