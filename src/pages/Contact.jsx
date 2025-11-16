import React from 'react'
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  Stack,
  Link,
} from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';

/**
 * Contact - Responsive contact page with form, address, map placeholder and social links.
 * This form is static (no backend integration) and demonstrates layout only.
 */
export default function Contact() {
  return (
    <>
      <SectionWrapper
        sx={{ backgroundColor: '#0f1724', color: 'common.white' }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Get in touch
            </Typography>
            <Typography variant="body1" color="inherit" paragraph>
              Whether you’re evaluating Linkific for your organization or have a
              question about our platform, our team is ready to help.
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Typography variant="body2">
                Email: contact@linkific.example
              </Typography>
              <Typography variant="body2">Phone: (415) 555-0198</Typography>
              <Typography variant="body2">
                123 Market Street, San Francisco, CA
              </Typography>
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/images/service.png"
              alt="Map placeholder"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Contact us
        </Typography>
        <Paper sx={{ p: 3 }} elevation={2}>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField label="Name" fullWidth />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid item size={{ md: 12 }}>
              <TextField label="Phone" fullWidth />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField label="Message" fullWidth multiline rows={5} />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <Button variant="contained" size="large">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </SectionWrapper>
    </>
  );
}
