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

    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        width: 80%;
        height: 60%;
        margin-bottom: 100px;
    }

    /* Media queries tablet */

    @media screen and (max-width: 768px){
        width: 90%;
        height: 70%;
        margin-bottom: 50px;
    }

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 0px;
        margin-top: 150px;
    }
`

export const DescContainer=styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        width: 100%;
        height: 10%;
        justify-content: flex-end;
    }
`

export const TitleContainer=styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 50px;

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        position: absolute;
        height: 10%;
    }
`

export const TitleCard=styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #e0e0e0f2;
    text-align: left;
    
    
    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        font-size: 1.6rem;
    }

    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        font-size: 1.4rem;
    }
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

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        position: absolute;
        height: 2px;
        align-items: flex-start;
    }
`

export const Desc= styled.p`
    width: 80%;
    height: 100%;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.05rem;
    color: #e0e0e0f2;

      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        font-size: 1rem;
    }


    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        font-size: .9rem;
    }
`

export const ImageContainer=styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        position: absolute;
        height: 95%;
        align-items: flex-start;
    }
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

    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        width: 15rem;
        height: 15rem;
    }
`

export const FancyImageContainer=styled.div`
    width: 18rem;
    height: 18rem;
    border-radius: 42% 58% 76% 24% / 76% 80% 20% 24% ;
    background: rgb(54,46,131);
    background: linear-gradient(180deg, rgba(54,46,131,0.9921218487394958) 22%, rgba(175,0,162,1) 100%);

    
    @media screen and (max-width:768px ) {
        width: 14rem;
        height: 14rem;
    }
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


    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        display: none;
    }
`

export const Icon=styled.img`
    width: 40px;

      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        width: 35px;
    }
`