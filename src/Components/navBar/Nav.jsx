
import { useState,React} from 'react';
import { ButtonMobile, ItemNav, ItemsContainer, Logo, LogoContainer, MobileItem, MobileMenu, MobileMenuContainer, MobileNav, NavContainer } from './NavStyles'
import LOGO from '../Images/logoIMG/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisible } from '../modalContact/contactActions';
import { toggleMobile } from './mobileActions';


export const Nav = () => {
  const dispatch= useDispatch()
  const {visible}=useSelector(state=> state.contact)
  const {visibleMobile}=useSelector(state=> state.mobile)
  return (
    <>
      <NavContainer>
        <LogoContainer>
          <a href='#home'><Logo src={LOGO}/></a>
        </LogoContainer>   


          <MobileNav>
            <ButtonMobile
          href='#home'
          onClick={()=>{
            return (
              dispatch(toggleMobile())
            )
          }}
            >
              <MobileItem/>
              <MobileItem/>
              <MobileItem/>
            </ButtonMobile>
          </MobileNav>
        
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

        {
          visibleMobile &&
          <MobileMenuContainer isHidden={!visibleMobile}>
          <MobileMenu>
            <ItemNav href='#home'
              onClick={()=>{
                dispatch(toggleVisible())
              }}
              >Contáctame</ItemNav>
    
              <ItemNav href='#techs' 
              onClick={()=>{
                if(visible === true){
                  return dispatch(toggleVisible())
                }
                else if(visibleMobile === true){
                  return dispatch(toggleMobile())
                }
              }}
              >Tecnologías</ItemNav>
    
              <ItemNav href='#jobs'
                onClick={()=>{
                  if(visible === true){
                    return dispatch(toggleVisible())
                  }
                  else if(visibleMobile === true){
                    return dispatch(toggleMobile())
                  }
                }}
              >Proyectos</ItemNav>
          </MobileMenu>
        </MobileMenuContainer>
        }

    </>
  )
}
