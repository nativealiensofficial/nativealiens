import React, {useState} from 'react'; 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button } from './Styles'; 
    
const ButtonDescer = () =>{ 
    
  const [visible, setVisible] = useState(true) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 0){ 
      setVisible(false) 
    }  
    else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  }; 
    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    }); 
  }; 
    
  window.addEventListener('scroll', toggleVisible); 
    
  return ( 
    <Button> 
     <ArrowDownwardIcon onClick={scrollToBottom}  
     style={{display: visible ? 'inline' : 'none', border: 'none', borderRadius: '50%', width: '80px', height: '80px', background: 'rgb(134, 74, 212)', color: 'white'}} /> 
    </Button> 
  ); 
} 
    
export default ButtonDescer;