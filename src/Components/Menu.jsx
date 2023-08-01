import React from "react";
import { styled } from "styled-components";
import {Link} from "react-router-dom"
import image from "../images/r_tube1.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bgLighter};
  height: max-content;
  top:0;
  position: sticky;
  color: ${({theme})=>theme.text};
  border: 10px;
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 10px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 30px;
  border-radius: 10px;
  background-blend-mode: screen;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor:pointer;
  padding:7.5px 0px;
  &:hover{
    background-color:${({theme})=>theme.soft}
  }
`;
const Hr = styled.hr`
border:0.5px solid ${({theme})=>theme.soft};
margin:15px 0px;`
export const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
        <Logo>
          <Img src={image}></Img>
          RakeshTube
        </Logo>
        </Link>
        <Item><HomeIcon/>
          Home
        </Item>
        <Item><ExploreIcon/>
          Explore
        </Item>
        <Item><SubscriptionsIcon/>
          Subscriptions
        </Item>
        <Hr/>
        <Item><VideoLibraryIcon/>
          Library
        </Item>
        <Item><HistoryIcon/>
          History
        </Item>
        <Hr/>
        <Item><LibraryMusicIcon/>
          Music
        </Item>
        <Item><SportsBasketballIcon/>
          Sports
        </Item>
        <Item><SportsEsportsIcon/>
          Gaming
        </Item>
        <Item><MovieCreationIcon/>
          Movies
        </Item>
        <Item><FeedIcon/>
          News
        </Item>
        <Item><LiveTvIcon/>
          Live
        </Item>
        <Hr/>
        <Item><SettingsIcon/>
          Settings
        </Item>
        <Item><FlagIcon/>
          Report
        </Item>
        <Item><HelpIcon/>
          Help
        </Item>
        <Item onClick={()=> setDarkMode(!darkMode)}><LightModeIcon/>
          {darkMode?"Light Mode":"Dark mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};
