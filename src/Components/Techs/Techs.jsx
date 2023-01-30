import React, { Children } from 'react'
import { ImageContainer, Spacer, TechCard, TechCardContainer, TechContainer, TechIcon, TechIMG, TechName, Title, TitleContainer } from './TechStyles'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiRedux} from 'react-icons/si'
import techIMG from '../Images/TechIMG/techIMG2.png'


const ItemTech=({children, text})=>{
    return(
        <>
        <div 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        >
            <TechCard>
                <TechIcon>
                    {children}
                </TechIcon>
                <TechName>
                    {text}
                </TechName>
            </TechCard>
        </div>
        </>
    )
}

export const Techs = () => {
  return (
    <>
    <TechContainer>
        <TitleContainer>
            <Title id='techs'>Tecnologías que utilizo</Title>
        </TitleContainer>

        <ImageContainer>
            <TechIMG src={techIMG}/>
        </ImageContainer>
        

        <TechCardContainer>
            <Spacer>
                <ItemTech text='HTML'>
                    <AiFillHtml5 style={{color: '#f16524'}}/>
                </ItemTech>

                <ItemTech text='CSS'>
                    <FaCss3Alt style={{color: '#0096dc'}}/>
                </ItemTech>
            
                <ItemTech text='JAVASCRIPT'>
                    <IoLogoJavascript style={{backgroundColor: '#f0db4f', color: '#1e1e1e',  borderRadius:'15px'}}/>
                </ItemTech>

                <ItemTech text='REACT.JS'>
                    <FaReact style={{color: '#61dafc'}}/>
                </ItemTech>        

                <ItemTech text='REDUX'>
                    <SiRedux style={{color: '#764abc'}}/>
                </ItemTech>       

                <ItemTech text='STYLED COMPONENTS'>
                    💅
                </ItemTech>
            </Spacer>
        </TechCardContainer>
 
    </TechContainer>
    </>
  )
}
