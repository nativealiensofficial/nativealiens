import styled, { css } from 'styled-components'


export const Container = styled.div`
    display: flex; 
    align-items: center;
    position: fixed; 
    margin: 15px; 
  
    `;

export const ImgLogo = styled.img`
    width: 100px; 
    height: 100px; 
    margin-top: 15px; 
    background: transparent;
    
`;

export const ContentHeader = styled.div`
    position: fixed;
    width: 100%;
    left: 75%;

    @media(max-width: 1200px){
        position: fixed; 
        width: 100%;
        left: 65%;
    }

    @media(max-width: 1080px){
        position: fixed; 
        width: 100%;
        left: 50%;
    }

    @media(max-width: 560px){
        position: fixed; 
        width: 100%;
        left: 33%;
    }

`;

export const LogoInstagram = styled.img`
     width: 40px; 
     height: 40px; 
     margin: 10px; 
`;

export const ContentButtonWallet = styled.div`
    position: fixed; 
    width: 100%;
    left: 78%;

    @media(max-width: 1200px){
        position: fixed; 
        width: 100%;
        left: 75%;
    }

    @media(max-width: 1080px){
        position: fixed; 
        width: 100%;
        left: 60%;
    }

    @media(max-width: 560px){
        position: fixed; 
        width: 100%;
        left: 43%;
    }

`;

export const ButtonWallet = styled.button`
    width: 200px; 
    height: 70px;
    text-align: center;
    margin-left: 5%; 
    border: none;
    border-radius: 25px;
    text-transform: none;
    letter-spacing: 0;
    font-size: 14px;
    line-height: 21px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: rgb(134, 74, 212);
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: linear-gradient(90deg, rgba(176,27,228,1) 0%, rgba(162,0,255,1) 0%);
  }

    ${props =>
        props.wallet &&
        css`
     background: linear-gradient(90deg, rgba(75,0,101,1) 0%, rgba(0,255,158,1) 0%);
      color: white;
      font-size: 18px;
      &:hover {
        background: linear-gradient(90deg, rgba(176,27,228,1) 0%, rgba(10,244,141,1) 0%);
      }
    `};
`;

export const VideoBackground = styled.video`
     position: absolute;
     width: 100%;
     left: 50%;
     top: 50%;
     height: 100%;
     object-fit: cover;
     transform: translate(-50%, -50%);
     z-index: -1;
     border-radius: 0 0 100px 100px;

`;

export const ImgNave = styled.img`
position: absolute;
width: 100%;
top: 100%;
object-fit: cover;
z-index: -1;



`;

export const ContainerModal = styled.div`
    background: linear-gradient(90deg, rgba(75,0,101,1) 0%, rgba(91,13,138,1) 0%);
    width: 400px;
    height: 200px;
    display: flex; 
    flex-direction: column;
    align-items: center; 
`;

export const ButtonModal = styled.button`
    background: white;
    border-radius: 30px;
    justify-content: center;
    padding: 15px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    width: 50%;
    &:hover {
        background: linear-gradient(90deg, rgba(176,27,228,1) 0%, rgba(201,183,212,1) 0%);
  }
`;

export const ImgMetamask = styled.img`
    width: 30px; 
    height: 30px; 
    margin-right: 15px;
    
`;

export const ButtonMint = styled.button`
    width: 100%;
    height: 100px;
    background: rgb(134, 74, 212);
    color: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
        background: linear-gradient(90deg, rgba(176,27,228,1) 0%, rgba(10,244,161,1) 74%);
        color: white;
  }

`;

export const ContentFooter = styled.div`
margin: 12%;
 display: flex;
 justify-content: space-between;
 border-radius: 20px;
 box-shadow: inset 0 0 1em white, 0 0 1em black;

`;

export const GifAlien = styled.img`
width: 400px;
 height: 400px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
`;

export const GlassFooter = styled.div`
padding: 80px;
`;

