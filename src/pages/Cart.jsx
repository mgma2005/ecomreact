import Announcement from '../Components/Announcement';
import React from 'react';
import Navbar from '../pages/Navbar';
import styled from 'styled-components';


const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    margin: 100px;
`;

const TopTexts = styled.div`
    
    margin: 0px 0px;
    font-size: 2vw;
`;
const TopText = styled.span`
    cursor: pointer;
    font-size: 1.7vw;
`;

const Toptext = styled.span`
    cursor: pointer;
    font-size: 1.7vw;
    padding: 50px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div``;
const Summary = styled.div`
    display: flex;
`;



const Cart = () => {
  return (
    <Container>
    <Announcement/>
    <Wrapper>
    <Title>YOUR BAG</Title>
    <Top>
    <TopButton>CONTINUE SHOPPING</TopButton>
    <TopTexts>
    <TopText>Shopping Bag</TopText>
    <Toptext>Your Wishlist</Toptext>
    </TopTexts>
    <TopButton type='filled'>CHECKOUT NOW</TopButton>
    </Top>
    <Bottom>
    <Info>info</Info>
    <Summary>summary</Summary>
    </Bottom>
    </Wrapper>
    <Navbar/>
    </Container>
  )
}

export default Cart
