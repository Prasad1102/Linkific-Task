import React from 'react'
import { TextField, Button, Grid, Typography, Paper } from '@mui/material'
import SectionWrapper from '../components/SectionWrapper'

/**
 * Contact - Simple contact form using Material UI TextFields. No backend integration.
 */
export default function Contact() {
  return (
    <SectionWrapper>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Paper sx={{ p: 3 }} elevation={2}>
        <Grid container spacing={2}>
          <Grid item size={{xs: 12, sm: 6}}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item size={{xs: 12, sm: 6}}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item size={{xs: 12}}>
            <TextField label="Subject" fullWidth />
          </Grid>
          <Grid item size={{xs: 12}}>
            <TextField label="Message" fullWidth multiline rows={4} />
          </Grid>
          <Grid item size={{xs: 12}}>
            <Button variant="contained">Send Message</Button>
          </Grid>
        </Grid>
      </Paper>
    </SectionWrapper>
  )
}
