import { FC } from 'react'
import styled from 'styled-components'

import PageContainer from '../../ui/PageContainer'

const Footer: FC = () => {
  const currentYear =  new Date().getFullYear()

  return (
    <PageContainer>
      ©{currentYear} H.C. Tiffany Lo
    </PageContainer>
  )
}

export default Footer
