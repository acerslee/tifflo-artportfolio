import { createClient } from 'contentful'

export type ContentfulProps<T = any> = {
  cvHeading?: T
  cvAward?: T
  cvEducation?: T
  cvExhibition?: T
  about?: T
}

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_TOKEN,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
})
