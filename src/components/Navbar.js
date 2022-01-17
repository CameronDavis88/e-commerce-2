import { Badge } from '@material-ui/core';
import { Search, ShoppingBasketOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';



//This is styled components with back-tics
const Container = styled.div`
    height: 6px;
        background-color: black;`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between
    align-items: center;
    `;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SearchContainer = styled.div`
    boarder: 1px;
    background-color: solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    // border: none;
`;

const Logo = styled.h1`
font-weight: bold;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;


const Navbar = () => {
    return (
        //this Container component is the styled component created above
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input style={{color: 'grey', fontSize:16}} />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
Center Logo!
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Badge badgeContent={5} color='primary' >
                        <ShoppingBasketOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
