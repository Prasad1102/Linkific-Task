import React from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  Stack,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

/**
 * Footer - Multi-column footer with quick links, services, contact info and social icons.
 */
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'primary.contrastText',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Linkific
            </Typography>
            <Typography variant="body2" color="inherit">
              We build modern web platforms that help businesses scale and
              deliver measurable outcomes. Reach out to start your project.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/portfolio" color="inherit" underline="hover">
                Portfolio
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              Services
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Product Design</Typography>
              <Typography variant="body2">Web Development</Typography>
              <Typography variant="body2">Analytics & AI</Typography>
              <Typography variant="body2">Growth Strategy</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              123 Market Street, Suite 500
            </Typography>
            <Typography variant="body2">San Francisco, CA 94103</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Email: contact@linkific.example
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton size="small" color="inherit" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" color="inherit" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" color="inherit" aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 4, borderTop: '1px solid rgba(255,255,255,0.08)', pt: 3 }}
        >
          <Typography variant="body2" color="inherit" align="center">
            © {new Date().getFullYear()} Linkific — All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
