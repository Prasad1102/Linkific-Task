import React from 'react'
import { Typography, Grid } from '@mui/material'
import SectionWrapper from '../components/SectionWrapper'
import CardItem from '../components/CardItem'

/**
 * Services - Shows a list of services using responsive Cards and Grid.
 */
export default function Services() {
  const services = [
    { title: 'Design', description: 'Beautiful UI/UX designs for your products.', image: 'https://picsum.photos/seed/design/600/400' },
    { title: 'Development', description: 'Modern web applications built with best practices.', image: 'https://picsum.photos/seed/dev/600/400' },
    { title: 'Marketing', description: 'Marketing strategies to grow your brand.', image: 'https://picsum.photos/seed/marketing/600/400' },
  ]

  return (
    <SectionWrapper>
      <Typography variant="h4"  fontWeight={600} sx={{py: 3}}gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((s) => (
          <Grid item size={{xs: 12, sm: 6, md: 4}} key={s.title}>
            <CardItem title={s.title} description={s.description} image={s.image} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
}
