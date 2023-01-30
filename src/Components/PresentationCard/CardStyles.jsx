import styled from "styled-components";

export const CardContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`

export const CardStyled=styled.div`
    width: 80%;
    height: 75%;
    display: flex;
    background: rgb(46,103,131);
    background: linear-gradient(180deg, rgba(46,103,131,0.22461484593837533) 0%, rgba(61,0,175,0.22461484593837533) 100%);
    backdrop-filter: blur(6px);
    border-radius: 20px;
    flex-wrap: wrap;
    box-shadow: 0px 0px 23px -4px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 23px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 23px -4px rgba(0,0,0,0.75);
`

export const DescContainer=styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TitleContainer=styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 50px;
`

export const TitleCard=styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #e0e0e0f2;
    text-align: left;
`

export const End=styled.small`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    background-clip: text;
    color: transparent;
    background: rgb(100,46,131);
    background: linear-gradient(90deg, rgba(100,46,131,0.9921218487394958) 21%, rgba(175,0,124,1) 73%);
    -webkit-background-clip: text;
`

export const TextContainer=styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 50px;
`

export const Desc= styled.p`
    width: 80%;
    height: 100%;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.05rem;
    color: #e0e0e0f2;
`

export const ImageContainer=styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FancyBackground=styled.div`
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 42% 58% 72% 28% / 61% 37% 63% 39% ;
    background: rgb(47,46,131);
    background: linear-gradient(180deg, rgba(47,46,131,0.9921218487394958) 22%, rgba(0,165,175,1) 73%, rgba(0,165,175,1) 76%);
`

export const FancyImageContainer=styled.div`
    width: 18rem;
    height: 18rem;
    border-radius: 42% 58% 76% 24% / 76% 80% 20% 24% ;
    background: rgb(54,46,131);
    background: linear-gradient(180deg, rgba(54,46,131,0.9921218487394958) 22%, rgba(175,0,162,1) 100%);
`

export const FancyImage=styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    border-radius:22% 78% 76% 24% / 32% 50% 50% 68% ;
`

export const IconContainer=styled.div`
    width: 100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon=styled.img`
    width: 40px;
`