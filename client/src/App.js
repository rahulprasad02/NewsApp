// components
import Header from './Components/Header';
import InfoHeader from './Components/InfoHeader';
import Article from './Components/Articles';
// replacing "div" with MUI's BOX
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  width: '60%',
  margin: '40px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Article />
      </Container>
    </Box>
  );
}

export default App;
