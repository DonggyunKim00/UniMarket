import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoBox>
        <img src="./UniLogo.png" width={90} height={90} alt="" />
      </LogoBox>
      <TypoBox>UNI-MARKET</TypoBox>
      <MenuBox></MenuBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TypoBox = styled.p`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

const MenuBox = styled.div`
  width: 20%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
