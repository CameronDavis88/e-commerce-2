import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
left: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`;


const Wrapper = styled.div`
height: 100%;

`;

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
`;
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Image = styled.img`
height: 80%;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Description = styled.p`
margin: 50px 0px;
font-weight: 500;
font-size: 20px;
letter-spacing: 3px;
`;
const Button = styled.button`
cursor: pointer;
padding: 10px;
font-size: 20px;
background-color: transparent;

`;


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left" >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src='' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Sales and Deals</Title>
                        <Description>Something more about the deals and sales etc?</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider;
