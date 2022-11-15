import React from 'react'
import { ListItemStyle } from './ListItem.styled'

interface IProps {
    children: React.ReactNode | string
}

const ListItem: React.FC<IProps> = ({children}) => {
  return (
    <ListItemStyle>{children}</ListItemStyle>
  )
}

export default ListItem