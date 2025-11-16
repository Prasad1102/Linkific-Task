import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
import SectionWrapper from '../components/SectionWrapper'
import CardItem from '../components/CardItem'

/**
 * Portfolio - Showcase of selected projects using local images.
 */
export default function Portfolio() {
  const projects = [
    {
      title: 'Enterprise Learning Platform',
      category: 'SaaS / B2B',
      description:
        'A scalable learning management platform for enterprise training programs, with single sign-on and analytics.',
      image: '/images/enterprise.jpg',
    },
    {
      title: 'Creator Course Hub',
      category: 'Creator Platform',
      description:
        'A commerce-enabled creator experience with subscriptions, coupons, and integrated marketing tools.',
      image: '/images/creater.jpg',
    },
    {
      title: 'Certification Portal',
      category: 'Education',
      description:
        'A certification workflow with proctored exams, progress tracking, and completion badges.',
      image: '/images/certificate.jpg',
    },
  ]

  return (
    <SectionWrapper>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Our Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <CardItem
              title={p.title}
              description={`${p.category} — ${p.description}`}
              image={p.image}
              actions={<Button size="small">View Project</Button>}
            />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
