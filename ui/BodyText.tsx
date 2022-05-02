import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface BodyStyleType {
  size: 'small' | 'medium' | 'large'
}

interface BodyTextType extends BodyStyleType {
  children: ReactNode
}

const BodyText: FC<BodyTextType> = ({ children, size }) => {
  return (
    <TextSetup size={size}>
      {children}
    </TextSetup>
  )
}

const fontSize = {
  large: '1.2rem',
  medium: '1rem',
  small: '0.8rem'
}

const TextSetup = styled("p")<BodyTextType>`
  font-size: ${(props) => fontSize[props.size]};
`

export default BodyText
