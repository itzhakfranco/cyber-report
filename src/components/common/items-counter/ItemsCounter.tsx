import React from 'react'
import { ItemsCounterStyle } from './ItemsCounter.styled'

interface IProps {
    children: React.ReactNode | string
}

const ItemsCounter: React.FC<IProps> = ({children}) => {
  return (
    <ItemsCounterStyle>{children}</ItemsCounterStyle>
  )
}

export default ItemsCounter