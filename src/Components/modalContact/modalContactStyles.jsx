import styled from "styled-components";

export const ModalContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: transparent;
    backdrop-filter: blur(4px);
    position: absolute;
    z-index: 1;
`

export const Modal=styled.div`
    width: 40%;
    height: 92.5%;
    background-color: #121212;
    box-shadow: -11px -15px 24px -1px rgba(0,0,0,0.64);
-webkit-box-shadow: -11px -15px 24px -1px rgba(0,0,0,0.64);
-moz-box-shadow: -11px -15px 24px -1px rgba(0,0,0,0.64);

  /* Media queries mobile */

  @media screen and (max-width:480px){
    width: 100%;
    height: 92.5%;
    }
`

export const CloseContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Close= styled.p`
    font-family: 'Poppins', sans-serif;
    color: #ffffffcf;
    font-size: 1rem;
    margin-right: 50px;
`

export const TitleContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title=styled.h3`
    font-family: 'Poppins', sans-serif;
    color: #ffffffcf;
    font-size: 2rem;
`

export const ItemContainer=styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    /* Media queries tablet */

    @media screen and (max-width:768px){
        flex-direction: column;
    }

    
  /* Media queries mobile */

  @media screen and (max-width:480px){
    width: 100%;
    }
`

export const TextContainer=styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const TextItem=styled.p`
    font-family: 'Poppins', sans-serif;
    color: #ffffffcf;
    font-size: 1rem;

    /* Media queries tablet */

    @media screen and (max-width:768px){
        font-size: .9rem;
    }
`

export const LinkText=styled.a`
    text-decoration: none;
    color: #ffffffcf;
`

export const IconContainer=styled.div`
    width: 50%;
    display: flex;
    justify-content:center;
    align-items: center;


`


export const Icon=styled.a`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 2.2rem;
    color: #000000da;
    background: rgb(216,87,232);
    background: linear-gradient(43deg, rgba(216,87,232,1) 0%, rgba(232,233,82,1) 100%);
    border-radius: 100%;
`

