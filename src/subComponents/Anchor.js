import React, { useRef , useEffect } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../Components/AllSvg'



const Container = styled.div`
    position:relative;
`

const Slider = styled.div`
position:fixed;
top:0;
right:2rem;
display:flex;
justify-content:center;
align-item:center;
flex-direction:column;
transform:translateY(-100%);

.chain{
transform:rotate(135deg);
}
.anchor{
margin-left:-20px;
}
`

const PreDisplay = styled.div`
position:absolute;
top:0;
right:2rem;
`

const AnchorComponent = (props) => {
    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {

        const handleScroll = () =>{

            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHight = document.body.offsetHeight;

            let diff = Math.max(bodyHight - (scrollPosition + windowSize))

            //diff*100/ scrollposition
            let diffP = (diff * 100) / (bodyHight - windowSize);

            ref.current.style.transform = `translateY(${-diffP}%)`

            if(window.pageYOffset > 5){
                hiddenRef.current.style.display = 'none'
            }else{
                hiddenRef.current.style.display = 'block'
            }
        }

        window.addEventListener('scroll', handleScroll)

        return() => window.removeEventListener('scroll', handleScroll)

      
    }, []);
  return (
    <>
    <Container>
        <PreDisplay ref={hiddenRef} className='hidden' >
        <Anchor width={70} height={70} fill="currentColor"  />
        </PreDisplay>
        <Slider ref={ref}>
                {
                    [...Array(props.numbers)].map(( x ,id) => {
                        return <Link key={id} width={25} height={25} fill="currentColor" className="chain" />
                    })
                }
                <Anchor width={70} height={70} fill="currentColor" className='anchor' />
        </Slider>
    </Container>
    </>
  )
}

export default AnchorComponent
