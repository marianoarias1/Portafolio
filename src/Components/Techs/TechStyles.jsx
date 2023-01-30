import styled from "styled-components";

export const TechContainer=styled.div`
    width: 100%;
    height: 100%;
    background-color: #151412;
`
export const TechIMG=styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`
export const ImageContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    margin-top:15rem;
    justify-content: center;
    align-items: center;
`

export const TitleContainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

export const Title=styled.h2`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 2rem;
`

export const TechCardContainer=styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Spacer= styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

export const TechCard=styled.div`
    width: 20rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(5px);
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 53px -24px rgba(255,255,255,0.75) inset;
    -webkit-box-shadow: 0px 0px 53px -24px rgba(255,255,255,0.75) inset;
    -moz-box-shadow: 0px 0px 53px -24px rgba(255,255,255,0.75) inset;
`

export const TechIcon=styled.div`
    font-size: 15rem;
    transition: all .3s ease-in-out;
    color: #f6f6f6;
    :hover{transform: scale(0.9);}
    filter: drop-shadow(0px 0px 49px black);
`

export const TechName=styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    color: #f6f6f6;
`