import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_TOKEN,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
})
