import { Search } from '@material-ui/icons';
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
`;
const Right = styled.div`
    flex: 1;
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

const Logo = styled.div`

`;


const Navbar = () => {
    return (
        //this Container component is the styled component created above
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
