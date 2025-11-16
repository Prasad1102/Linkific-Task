import React from 'react'
import { Grid, Avatar, Typography } from '@mui/material'
import SectionWrapper from '../components/SectionWrapper'
import CardItem from '../components/CardItem'

/**
 * Team - Display team members using cards with avatar images.
 */
export default function Team() {
  const members = Array.from({ length: 6 }).map((_, i) => ({
    name: `Member ${i + 1}`,
    role: ['CEO', 'Designer', 'Developer', 'Marketer', 'PM', 'QA'][i % 6],
    image: `https://i.pravatar.cc/300?img=${i + 10}`,
  }))

  return (
    <SectionWrapper>
      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        {members.map((m) => (
          <Grid item xs={12} sm={6} md={4} key={m.name}>
            <CardItem
              title={m.name}
              description={m.role}
              image={m.image}
              actions={null}
            />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
}
