declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      NEXT_PUBLIC_CONTENTFUL_SPACE_TOKEN: string
      NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN: string
    }
  }
}

export {}
