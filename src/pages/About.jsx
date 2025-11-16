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
        <Grid item>
          <Typography variant="h6" paragraph>
            Linkific is a modern digital solutions company focused on building
            clean, scalable, and user-friendly web platforms. Our goal is to
            help businesses simplify their processes and move faster by using
            well-designed software. We create products that are easy to use,
            visually consistent, and built with reliable technology. This
            project demonstrates how a real company website can be structured
            using React and Material UI. The About page highlights our approach
            to quality design, performance, and clear user experience. Our work
            includes building responsive layouts, meaningful content sections,
            and flexible components that can adapt to different business needs.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page contains static content laid out using Material UI's Grid,
            Typography and responsive utilities. Images are placeholders from a
            public provider.
          </Typography>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
