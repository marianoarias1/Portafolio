
import { useState,React} from 'react';
import { ItemNav, ItemsContainer, Logo, LogoContainer, NavContainer } from './NavStyles'
import LOGO from '../Images/logoIMG/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisible } from '../modalContact/contactActions';


export const Nav = () => {
  const dispatch= useDispatch()
  const {visible}=useSelector(state=> state.contact)
  return (
    <>
      <NavContainer>
        <LogoContainer>
          <a href='#home'><Logo src={LOGO}/></a>
        </LogoContainer>

        <ItemsContainer>
          <ItemNav href='#home'
          onClick={()=>{
            dispatch(toggleVisible())
          }}
          >Contáctame</ItemNav>

          <ItemNav href='#techs' 
          onClick={()=>{
            return visible == true ? dispatch(toggleVisible()) : null
          }}
          >Tecnologías</ItemNav>

          <ItemNav href='#jobs'
          onClick={()=>{
            return visible == true ? dispatch(toggleVisible()) : null
          }}
          >Proyectos</ItemNav>
        </ItemsContainer>
      </NavContainer>
    </>
  )
}
