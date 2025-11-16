import React from 'react'
import { Box, Container } from '@mui/material'

/**
 * SectionWrapper - Provides consistent vertical spacing for page sections.
 * Usage: <SectionWrapper><YourContent /></SectionWrapper>
 */
export default function SectionWrapper({ children, sx }) {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, ...sx }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}
