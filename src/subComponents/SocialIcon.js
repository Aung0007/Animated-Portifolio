import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../Components/AllSvg'
import styled from 'styled-components'

import {DarkTheme} from '../Components/Themes'




const Icons = styled.div`

display:flex;
flex-direction:column;
align-items:center;


position:fixed;
bottom:0;
left:2rem;


z-index:3;

&>*:not(:last-child){
margin:.5rem 0;

}

`


const Line = styled.span`

width:2px;
height:8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body} ;

`

const SocialIcon = (props) => {
  return (
    <>
    
    <Icons>
        
    <div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={"https://github.com"}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>

        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={"https://x.com"}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
        
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={"https://www.facebook.com"}>
                <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </div>

        <div>
            <NavLink style={{color:'inherit'}} target='_blank'  to={"https://www.youtube.com"} >
                <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
    </div>

    <Line  color={props.theme} />
    </Icons>
    
    </>
  )
}

export default SocialIcon
