import { FC } from 'react'

const Footer: FC = () => {
  const currentYear =  new Date().getFullYear()

  return<div>{currentYear}</div>
}

export default Footer