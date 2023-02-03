import styled from "styled-components";


export const JobsContainer=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151312;
    margin-top: 8.5rem;
    flex-direction: column;

    
      /* Media queries laptop */

      @media screen and (max-width:1024px ) {
        margin-top: 0rem;
    }

`

export const JobTitleContainer= styled.div`
    width: 90%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        margin-top: 3rem;
    }

    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        margin-top: 25rem;
        margin-bottom: 15rem;
    }

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        margin-bottom: 40rem;
        margin-top: 5rem;
        width: 100%;
    }
`

export const TitleJobs=styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #e0e0e0f2;

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }
`

export const JobsCardContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        flex-direction: column;
    }

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        flex-wrap: wrap;
        justify-content: flex-end;
        overflow-x: scroll;
        position: absolute;
        
    }
`

export const JobsCard=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    box-shadow: 0px 0px 48px -21px rgba(198,198,198,0.32) inset;
-webkit-box-shadow: 0px 0px 48px -21px rgba(198,198,198,0.32) inset;
-moz-box-shadow: 0px 0px 48px -21px rgba(198,198,198,0.32) inset;
    border-radius: 10px;
`

export const EachCardContainer=styled.div`
    width: 25%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        width: 28%;
        height: 90%;
    }

    /* Media queries tablet */

   @media screen and (max-width:768px ) {
    width: 70%;
    height: 100%;
    margin: 2rem;
    }

    /* Media queries Mobile */

    @media screen and (max-width:480px) {
        height: 32rem;
        width: 100%;
        margin:0px;
        margin-right: 2rem;
    }
`

export const JobsImageContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const JobsImage=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 10px 10px;
    transition: all .5s ease;
    z-index: 1;
    :hover{
        height: 50%;
        border-radius: 10px 10px 0px 0px;
    }

    /* Media queries tablet */

    @media screen and (max-width:768px ) {
        height: 50%;
        border-radius: 10px 10px 0px 0px;
        object-position: top;
        :hover{
            height: disabled;
        }
    }
`

export const DescContaiener=styled.div`
    width: 25%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;

    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        width: 25%;
        height: 45%;
    }

        /* Media queries tablet */

        @media screen and (max-width:768px ) {
        width: 70%;
    }
`

export const NameJobsContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        width: 100%;
    }
`

export const NameJobs=styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    color: #e0e0e0f2;
    width: 100%;
    text-align: center;

    /* Media queries laptop */

    @media screen and (max-width:1024px ) {
        font-size: 1rem;
    }
`

export const Desc=styled.div`
    width: 90%;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    flex-grow: 1;
    color: #e0e0e0f2;
    text-align: center;

        /* Media queries laptop */

        @media screen and (max-width:1024px ) {
            width: 100%;
            font-size: .9rem;
            height: 50%;
    }
`

export const JobsLink=styled.a`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-decoration: none;
`

export const ViewJob=styled.button`
    width: 7rem;
    height: 2.5rem;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    background-clip: text;
    color: transparent;
    z-index: 2;
    background: rgb(216,87,232);
    background: linear-gradient(43deg, rgba(216,87,232,1) 0%, rgba(232,233,82,1) 100%);
    -webkit-background-clip: text;
    box-shadow: 0px 0px 48px -21px rgba(198,198,198,0.32) inset;
    -webkit-box-shadow: 0px 0px 48px -21px rgba(198,198,198,0.32) inset;
    -moz-box-shadow: 0px 0px 48px -21px rgba(198,198,198,0.32) inset;

    :hover{
        background-clip: unset;
        color: #121212d5;
        background: rgb(216,87,232);
        background: linear-gradient(43deg, rgba(216,87,232,1) 0%, rgba(232,233,82,1) 100%);
    }
`