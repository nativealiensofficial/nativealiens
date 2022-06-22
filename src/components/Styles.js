import styled from 'styled-components'; 
    

    
export const Button = styled.div` 
   position: fixed;  
   width: 100%; 
   left: 90%;
   bottom: 15%; 
   height: 20px; 
   font-size: 3rem; 
   z-index: 1; 
   cursor: pointer; 

   @media(max-width: 1400px){
      position: fixed; 
      width: 100%;
      left: 85%;
  }

  @media(max-width: 1080px){
      position: fixed; 
      width: 100%;
      left: 80%;
  }

  @media(max-width: 560px){
      position: fixed; 
      width: 100%;
      left: 70%;
  }
`