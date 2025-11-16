import React from 'react'
import { Box, Container } from '@mui/material'

/**
 * SectionWrapper - A layout wrapper that allows full-width backgrounds while
 * keeping inner content constrained to a readable width.
 *
 * Props:
 * - children: node content
 * - sx: optional sx overrides applied to the outer full-width Box
 *
 * The inner Container is constrained to 1200px and centered. Default vertical
 * padding is generous to create a premium, airy layout.
 */
export default function SectionWrapper({ children, sx = {} }) {
  return (
    // Outer box fills the full width and accepts background styles via sx
    <Box
      component="section"
      sx={{ width: '100%', py: { xs: 3, md: 6 }, ...sx }}
    >
      {/* Inner container is constrained to a fixed max width and centered */}
      <Container sx={{ maxWidth: '1200px', mx: 'auto' }}>{children}</Container>
    </Box>
  );
}
