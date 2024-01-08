import React from "react";

// MUI Components
import { AppBar, Toolbar, styled } from '@mui/material';
import {Menu} from '@mui/icons-material/';

// changing deafult css of MUI 
const StyleHeader = styled(AppBar)`
    background: #fff;
    height: 70px; 
`;
const MenuIcon = styled(Menu)`
    color: #000;
`
// changing css of img with "styled" funct of MUI, but inorder to do that we have consider "img" as an object give css in strings
const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 60
})


const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <StyleHeader position="static">
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt = "logo" />
            </Toolbar>
        </StyleHeader>

    )
}

export default Header;