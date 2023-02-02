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

      /* Media queries tablet */

   @media screen and (max-width:768px ) {
        display: none;
    }
`

export const TitleContainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        margin-bottom: 20px;
    }

    
    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        margin-bottom: 30px;
        
    }

    
    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        margin-bottom: 50px;
        margin-top: 20rem;
    }
`

export const Title=styled.h2`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 2rem;

      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        margin-top: 80px;
    }

    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        margin-top: 16rem;
        
    }
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

      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        width: 18rem;
        height: 27rem;
    }

   /* Media queries tablet */

   @media screen and (max-width:768px ) {
        width: 17rem;
        height: 22rem;
        background: #d757e8;
        background: linear-gradient(43deg, rgba(216,87,232,1) 0%, rgba(232,233,82,1) 100%);
    }

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        width: 15rem;
        height: 20rem;
    }
`

export const TechIcon=styled.div`
    font-size: 15rem;
    transition: all .3s ease-in-out;
    color: #f6f6f6;
    :hover{transform: scale(0.9);}
    filter: drop-shadow(0px 0px 49px black);

      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        font-size: 14rem;
    }

    
   /* Media queries tablet */

   @media screen and (max-width:768px ) {
        font-size: 12rem;
        filter: drop-shadow(0px 5px 2px #151412);
    }

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        font-size: 10rem;
    }
`

export const TechName=styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    color: #f6f6f6;
`