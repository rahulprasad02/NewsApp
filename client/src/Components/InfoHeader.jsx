import React from "react";
// Typography is replacment of "p-tag" in MUI
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
})

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 300;
    margin-left: 50px
`

const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    const appleAppURL = 'https://apps.apple.com/in/app/inshorts/id892146527'; 
    const googleAppURL = 'https://play.google.com/store/apps/details?id=com.nis.app&pli=1.com/store'; 

    return (
        <Container>
            <Text>
                For the best experience use <b>inshorts</b> app on your smartphone
            </Text>
            <Box style={{ marginLeft: 'auto', display: 'flex' }}>
                <a href={appleAppURL} target="_blank" rel="noopener noreferrer">
                    <Image src={appleStore} alt="logo" />
                </a>
                <a href={googleAppURL} target="_blank" rel="noopener noreferrer">
                    <Image src={googleStore} alt="logo" />
                </a>
            </Box>
        </Container>
    );
}

export default InfoHeader;

