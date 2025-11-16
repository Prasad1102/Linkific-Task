import React from 'react'
import { Box, Typography, Grid, Button, Avatar, Paper } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import CardItem from '../components/CardItem';

/**
 * Home - Premium landing page sections: hero, features, why choose us,
 * testimonials, and a final CTA. Images reference local asset paths.
 */
export default function Home() {
  const features = [
    {
      title: 'Intelligent Course Builder',
      description:
        'Create and publish interactive courses with modular lessons, video hosting, and progress tracking.',
      image: '/images/ai.jpg',
    },
    {
      title: 'Integrated Payments',
      description:
        'Securely accept payments worldwide with built-in subscription and one-time purchase workflows.',
      image: '/images/payment.jpg',
    },
    {
      title: 'Insights & Growth',
      description:
        'Actionable analytics, funnels, and A/B test insights to help you scale revenue effectively.',
      image: '/images/growth.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Samantha Lee',
      title: 'Founder, BrightLearn',
      quote:
        'Linkific helped us launch our first cohort in two weeks. The platform is intuitive and the analytics are exceptional.',
      avatar: '/assets/team/samantha.jpg',
    },
    {
      name: 'Derek Morgan',
      title: 'Head of Growth, SkillRise',
      quote:
        'We increased conversions by 42% after moving to Linkific’s optimized checkout and onboarding flows.',
      avatar: '/assets/team/derek.jpg',
    },
  ];

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
              Build and scale your online courses with confidence
            </Typography>
            <Typography variant="h5" color="inherit" sx={{ mb: 3 }}>
              Everything you need to create, market, and sell professional
              learning experiences — all in one platform designed for creators
              and teams.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 2, boxShadow: 3 }}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Schedule a Demo
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/hero.png"
              alt="Platform preview"
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
          Product Highlights
        </Typography>
        <Grid container spacing={3}>
          {features.map((f) => (
            <Grid item xs={12} sm={6} md={4} key={f.title}>
              <CardItem
                title={f.title}
                description={f.description}
                image={f.image}
              />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper sx={{ backgroundColor: '#f6f8fb' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Why leading educators choose Linkific
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We provide a complete, end-to-end platform that brings together an
              advanced content authoring system, a modern and scalable commerce
              engine, and deeply integrated student analytics. This powerful
              combination allows teams to streamline their workflow, optimize
              learner experiences, and concentrate entirely on creating
              high-quality, engaging content instead of worrying about technical
              infrastructure or operational complexities.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Linkific unifies a powerful, enterprise-grade content-authoring
              suite with a modern, high-performance commerce engine and deeply
              integrated learner analytics. This complete ecosystem enables
              teams to design, launch, and scale exceptional digital learning
              experiences while eliminating the complexity of managing tools,
              infrastructure, or technical overhead. Your focus stays on
              delivering world-class content — we handle everything else behind
              the scenes.
            </Typography>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          What our customers say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid item xs={12} md={6} key={t.name}>
              <Paper sx={{ p: 3 }} elevation={1}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar
                      src={t.avatar}
                      alt={t.name}
                      sx={{ width: 64, height: 64 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {t.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      “{t.quote}”
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper
        sx={{
          background: 'linear-gradient(90deg,#0B4F6C, #0F8A9D)',
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Ready to scale your learning business?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Start your free trial today or book a personalized demo with one of
          our product specialists.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ boxShadow: 4 }}
        >
          Start Free Trial
        </Button>
      </SectionWrapper>
    </>
  );
}
