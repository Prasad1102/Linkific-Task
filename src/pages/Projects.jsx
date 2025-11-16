import React from 'react'
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SectionWrapper from '../components/SectionWrapper'
import CardItem from '../components/CardItem'

/**
 * Projects - Sample projects displayed in cards with accordion details.
 */
export default function Projects() {
  const projects = Array.from({ length: 4 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    description: 'A short description of the project demonstrating layout and card usage.',
    image: `https://picsum.photos/seed/project-${i}/600/400`,
  }))

  return (
    <SectionWrapper>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((p) => (
          <Grid item xs={12} sm={6} md={3} key={p.title}>
            <CardItem
              title={p.title}
              description={p.description}
              image={p.image}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
        Project Details
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>More about our projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            These expanders provide additional static information about how
            projects are structured in this demo.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </SectionWrapper>
  );
}
