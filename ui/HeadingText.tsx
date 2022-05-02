import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface HeadingStyleType {
  align?: 'left' | 'center' | 'right'
  weight?: 'bold' | 'normal'
  size: 'small' | 'medium' | 'large'
}

interface HeadingTextType extends HeadingStyleType {
  children: ReactNode
}

const HeadingText: FC<HeadingTextType> = ({ children, align, size, weight}) => {
  return (
    <TextSetup align={align} size={size} weight={weight}>
      {children}
    </TextSetup>
  )
}

const fontSize = {
  large: '2rem',
  medium: '1.5rem',
  small: '1rem'
}

const TextSetup = styled("div")<HeadingStyleType>`
  text-align: ${(props) => props.align || 'left'};
  font-weight: ${(props) => props.weight || 'normal'};
  font-size: ${(props) => fontSize[props.size]};
  margin-bottom: 2rem;
`

export default HeadingText
