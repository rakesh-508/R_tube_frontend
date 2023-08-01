import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from "react-router-dom";
const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  position: relative;
  background-color: ${({ theme }) => theme.bgLighter};
  color:${({ theme }) => theme.text}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({theme})=>theme.text};
  border-radius: 30px;
  background: transparent;
  color:inherit;
`;
const Input = styled.input`
  border: none;
  background:transparent;
  padding:10px;
  width:100%;
  color:inherit;
  &:focus
  {
    outline:none
  }
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"></Input>
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>
        <Button>
          <AccountCircleIcon />
          SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};
