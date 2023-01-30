import styled from "styled-components";

export const NavContainer=styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: #2c2c2cf6;
    position: fixed;
    z-index: 2;
    display: flex;
`

export const LogoContainer=styled.div`
    width: 60%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Logo=styled.img`
    width: 4rem;
    object-fit: contain;
`

export const ItemsContainer=styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ItemNav=styled.a`
    font-family: 'Poppins', sans-serif;
    width: 7rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    color: #121212dc;
    background: rgb(216,87,232);
    background: linear-gradient(43deg, rgba(216,87,232,1) 0%, rgba(232,233,82,1) 100%);
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition: all .5s ease-in-out;
    scroll-behavior: smooth;
    ::before{
        content: "";
        display: block;
        width: 0;
        height: 2px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transition: all .5s ease-in-out;
        background: #121212dc;

    }

    :hover::before{
        width: 100%;
        left: 0;
        background: rgb(216,87,232);
        background: linear-gradient(43deg, rgba(216,87,232,1) 0%, rgba(232,233,82,1) 100%);
    }

    :hover{
        background: #5b5a5a;
        color: #ffffffd8;
        box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.64) inset;
        -webkit-box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.64) inset;
        -moz-box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.64) inset;
    }
`