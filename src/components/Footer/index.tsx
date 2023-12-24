import React from 'react';
import { Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{justifyContent: 'space-evenly'}}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Logo</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Typography>
            <div>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><LinkedIn /></IconButton>
              <IconButton color="inherit"><Twitter /></IconButton>
              <IconButton color="inherit"><YouTube /></IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">998 Devonshire Ave Camp Hill, PA 17011</Typography>
            <Typography variant="body1">haddaway@comcast.net</Typography>
            <Typography variant="body1">(334) 202-4792</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Company</Typography>
            <Link display="block" href="#" color="inherit">The Team</Link>
            <Link display="block" href="#" color="inherit">Work</Link>
            <Link display="block" href="#" color="inherit">Services</Link>
            <Link display="block" href="#" color="inherit">Contact Us</Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;

