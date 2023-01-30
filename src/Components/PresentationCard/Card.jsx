import React from 'react'
import { CardContainer, CardStyled, Desc, DescContainer, End, FancyBackground, FancyImage, FancyImageContainer, Icon, IconContainer, ImageContainer, TextContainer, TitleCard, TitleContainer} from './CardStyles'
import image from '../Images/FancyImage/me.jpg'
import icon from '../Images/ScrollIcon/mouse-cursor.png'

export const Card = () => {
  return (
    <>
    <CardContainer id='home'>
        <CardStyled>
            <DescContainer>
                <TitleContainer>
                    <TitleCard>
                        Hola! Soy Mariano Arias.
                        <br/>
                        Soy Front<End>End</End> Developer
                    </TitleCard>
                </TitleContainer>
                
                <TextContainer>
                <Desc>
                    Me interesó el mundo de la programación en el 2019 y en 2021 decidí ingresar al bootcamp de NUCBA donde aprendí las tecnologías demandadas en el mercado y como utilizarlas, soy una persona responsable con mis tareas, siempre intento dar lo mejor de mí y ayudar a quién lo necesite.
                </Desc>
                </TextContainer>
            </DescContainer>

            <ImageContainer>
                <FancyBackground>
                    <FancyImageContainer>
                        <FancyImage src={image}/>
                    </FancyImageContainer>
                </FancyBackground>
            </ImageContainer>

            <IconContainer>
                <Icon src={icon}/>
            </IconContainer>
        </CardStyled>
    </CardContainer>
    </>
  )
}
