import type { NextPage } from 'next'
import { client } from '../utils/contentful'

type CVPageParams = {

}

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

const CVPage: NextPage = (props) => {
  return(
    <div></div>
  )
}

export default CVPage
