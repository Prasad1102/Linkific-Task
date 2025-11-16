import React from 'react'
import { Typography, Grid, Box, Chip, Stack } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import CardItem from '../components/CardItem';

/**
 * Services - Professional services page with multiple subsections.
 */
export default function Services() {
  const services = [
    {
      title: 'Product Design',
      description:
        'End-to-end product design—UX research, interaction design, and high-fidelity prototypes to validate concepts quickly.',
      image: '/images/develpmet.jpg',
    },
    {
      title: 'Platform Development',
      description:
        'Robust, secure web applications built with scalable architectures, CI/CD, and observability baked in.',
      image: '/images/platform.jpg',
    },
    {
      title: 'Growth & Analytics',
      description:
        'Data-driven growth strategies, conversion optimization, and integrated analytics to measure impact.',
      image: '/images/analytics.jpg',
    },
  ];

  return (
    <>
      <SectionWrapper
        sx={{ backgroundColor: '#0f1724', color: 'common.white' }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Services designed for scalable teams
            </Typography>
            <Typography variant="body1" color="inherit" paragraph>
              We partner with ambitious teams to build delightful product
              experiences and reliable engineering foundations that accelerate
              growth.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Chip label="Enterprise-ready" color="secondary" />
              <Chip label="Secure by default" color="secondary" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/service.png"
              alt="Services"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          What we offer
        </Typography>
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.title}>
              <CardItem
                title={s.title}
                description={s.description}
                image={s.image}
              />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <SectionWrapper sx={{ backgroundColor: '#f8fafc' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          How we work
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Discovery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We align on objectives, success metrics, and craft a focused
              roadmap.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Build
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Iterative delivery with frequent demos and clear milestones.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Scale
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We ensure stability, observability, and long-term maintainability.
            </Typography>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Technologies we use
        </Typography>
        <Grid container spacing={2}>
          {['React', 'Node.js', 'Postgres', 'Kubernetes', 'AWS'].map((t) => (
            <Grid item key={t}>
              <Chip label={t} />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </>
  );
}
