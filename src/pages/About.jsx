import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import SectionWrapper from '../components/SectionWrapper'

/**
 * About - Company information page using Typography and Grid.
 */
export default function About() {
  return (
    <SectionWrapper>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" paragraph>
            Linkific is a fictitious company created to demonstrate a clean, responsive React
            project using Material UI components. We focus on design, performance, and
            developer experience.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page contains static content laid out using Material UI's Grid, Typography
            and responsive utilities. Images are placeholders from a public provider.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="img" src="https://picsum.photos/seed/about/800/600" alt="About" sx={{ width: '100%', borderRadius: 2 }} />
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}
