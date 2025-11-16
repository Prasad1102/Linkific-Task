import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Divider from '@mui/material/Divider';
import SectionWrapper from '../components/SectionWrapper'
import CardItem from '../components/CardItem'

/**
 * Home - Landing page with hero and sample cards.
 */
export default function Home() {
  const cards = Array.from({ length: 6 }).map((_, i) => ({
    title: `Sample Item ${i + 1}`,
    description: 'This is a sample description demonstrating a generic card used on the homepage.',
    image: `https://picsum.photos/seed/home-${i}/600/400`,
  }))

  return (
    <>
      <SectionWrapper>
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{xs:12, md: 6}}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Linkific
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Linkific builds AI-powered automation and smart software that turns business 
              workflows or data into actionable results — delivered as working systems in 
              1–4 weeks
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Nowadays...
              business does not remain like it was before. now it's all about 
              competition and representation. business aside do you know about this?
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              let us build the environment so you can focus on your business.
            </Typography>
          </Grid>
          <Grid item size={{xs:12, md: 6}}>
            <Box component="img" src="https://picsum.photos/seed/hero/800/600" alt="Hero" sx={{ width: '100%', borderRadius: 2 }} />
          </Grid>
        </Grid>
      </SectionWrapper>

      
      <SectionWrapper>
        <Divider />
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{py: 5}}>
          Our Highlights
        </Typography>
        <Grid container spacing={3}>
          {cards.map((c) => (
            <Grid item size={{xs:12, sm: 6, md: 4}} key={c.title}>
              <CardItem title={c.title} description={c.description} image={c.image} />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </>
  )
}
