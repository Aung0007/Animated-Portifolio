import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvg'
import Intro from './Intro'
import { motion } from 'framer-motion'




const MainContainer = styled.div`

background:${props => props.theme.body} ;
width:100vw;
height:100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight:500;
}
`

const Container = styled.div`

padding:2rem;

`

const Contact = styled.h3`

position: absolute;
cursor:pointer;
top:2rem;
right:calc(1rem + 2vw);
text-decoration:none;
z-index:1;
color:inherit;
`

const Blog = styled.h3`

position: absolute;
cursor:pointer;
top:50%;
right:calc(1rem + 2vw);
transform: rotate(90deg)  translate(-50%, -50% );
text-decoration:none;
z-index:1;
color:inherit;
`

const Work = styled.h3`
color: ${props => props.click ? 'white' : 'black'};
position: absolute;
cursor:pointer;
top:50%;
left:calc(1rem + 2vw);
transform:  translate(-50%, -50% ) rotate(-90deg) ;
text-decoration:none;
z-index:1;
`

const BottomBar = styled.div`

position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;


display:flex;
justify-content:space-evenly;

`

const About = styled.h3`
position: absolute;
z-index:1;
color: ${props => props.click ? 'white' : 'black'};
`

const Skills = styled.h3`
z-index:1;
color:inherit;
`


const rotate = keyframes`

from{
transform:rotate(0);
}

to{
transform:rotate(360deg);

}


`

const Center = styled.button`

position:absolute;
top:${props =>props.click ? '85%' : '50%'};
left:${props =>props.click ? '92%' : '50%'};
transform:translate(-50%, -50%);
border:none;
outline:none;
background-color:transparent;
cursor:pointer;

display:flex;
flex-direction:column;
justify-content: center;
align-center:center;
transition: all 1s ease;

&>:first-child{

animation: ${rotate} infinite 1.5s linear;

}

&>:last-child{
 display:${props =>props.click ? 'none' : 'inline-block'};
 padding-top: 1rem ;
  margin-left:70px;
 
}
`

const DarkDiv = styled.div`
position:absolute;
background-color:#000;
top:0;
bottom:0;
right:50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {
  
  const [ click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>

    <MainContainer>
    <DarkDiv click={click} />
     

      <Container>

       <PowerButton/>
       <LogoComponent theme={click ? 'dark' : 'light'} />
       <SocialIcon theme={click ? 'dark' : 'light'} />

       <DarkDiv click={click} />


       <Center click={click}>
          <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
          <span>click here</span>
       </Center>


       <NavLink style={{color:'inherit'}}   target='_blank'  to={"https://www.instagram.com/"}>
       <Contact>
         <motion.h2 
          initial={{
            y:-200,
            transition:{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring', duration:1.5, delay:1}
          }}


         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         >
            Say hi..
         </motion.h2>
       
       </Contact>
       </NavLink>

      <NavLink to="/blog" click={click} style={{color:'inherit'}}>
      <Blog >
          <motion.h3
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           initial={{
            y:-200,
            transition:{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring', duration:1.5, delay:1}
          }}

          >
            Blog
          </motion.h3>
       </Blog>
      </NavLink>

      <NavLink to="/work">
      <Work click={click}  >
          <motion.h3
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           initial={{
            y:-200,
            transition:{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring', duration:1.5, delay:1}
          }}

          >
            Work
          </motion.h3>
       </Work>
      </NavLink>


      <BottomBar>
      <NavLink to="/about" >
      <About  click={click}>
          <motion.h3
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           initial={{
            y:200,
            transition:{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring', duration:1.5, delay:1}
          }}

          >
            About.
          </motion.h3>
       </About>
      </NavLink>

      <NavLink to="/skills" style={{color:'inherit'}}>
      <Skills >
          <motion.h3
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           initial={{
            y:200,
            transition:{type:'spring', duration:1.5, delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring', duration:1.5, delay:1}
          }}

          >
           Skills.
          </motion.h3>
       </Skills>
      </NavLink>
      </BottomBar>



      </Container>


      {click ? <Intro click={click} /> : null }
      

    </MainContainer>
    
    </>
  )
}

export default Main
