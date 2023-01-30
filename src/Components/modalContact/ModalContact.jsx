import React from 'react'
import { Icon, IconContainer, ItemContainer, LinkText, Modal, ModalContainer, TextContainer, TextItem, Title, TitleContainer } from './modalContactStyles'
import {BsFillPhoneFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineMail} from 'react-icons/ai'

export const Items=({text, children, link})=>{
    return(
        <>
            <ItemContainer>
                <IconContainer>
                    <Icon  target={'_blank'} href={link}>
                        {children}
                    </Icon>
                </IconContainer>
                <TextContainer>
                    <TextItem>
                        <LinkText target={'_blank'} href={link}>{text}</LinkText>
                    </TextItem>
                </TextContainer>

            </ItemContainer>
        </>
    )
}

export const ModalContact = () => {
  return (
    <>
        <ModalContainer>
            <Modal
            data-aos="fade-left"
            >
                <TitleContainer>
                    <Title>Contáctame!</Title>
                </TitleContainer>

                <Items text='2478419818'><BsFillPhoneFill/></Items>

                <Items text='marianoarias123@hotmail.com'><AiOutlineMail/></Items>

                <Items text='@mariano_arias1' link={'https://www.instagram.com/mariano_arias1/'}><AiFillInstagram/></Items>

                <Items text='Mariano Arias' link='https://www.linkedin.com/in/mariano-arias1/'><AiFillLinkedin/></Items>

                <Items text='marianoarias1' link='https://github.com/marianoarias1'><AiFillGithub/></Items>
            </Modal>
        </ModalContainer>
    </>
  )
}
