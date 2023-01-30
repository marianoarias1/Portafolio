import React from 'react'
import { HeaderContainer, HeaderIMG } from './HeaderStyles'
import IMG from '../Images/headerIMG/fotoCard.png'

export const Header = () => {
  return (
    <>
    <HeaderContainer>
        <HeaderIMG src={IMG}/>
    </HeaderContainer>
    </>
  )
}
