import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
  path: string
}

const SEO: FC<Props> = path => {
  const dynamicTitle = (route: string): string => {
    if (route === '/') return 'Artist | HC Tiffany Lo'
    if (route === '/about') return 'About | HC Tiffany Lo'
    if (route === '/cv') return 'CV | HC Tiffany Lo'

    return 'Contact | HC Tiffany Lo'
  }

  return (
    <Head>
      <title>{dynamicTitle(path.path)}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="See your favorite shoes in this database for the sneak enthusiasts!"
      ></meta>
      <meta charSet="UTF-8"></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default SEO
