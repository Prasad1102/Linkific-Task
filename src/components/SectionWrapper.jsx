import React from 'react'
import { Box } from '@mui/material';

/**
 * SectionWrapper - A layout wrapper that allows full-width backgrounds while
 * keeping inner content constrained to a readable width.
 *
 * This implementation uses an outer full-width Box that accepts background
 * styles via `sx`. The inner content is centered using a constrained Box
 * with a maxWidth and horizontal padding. This ensures the background spans
 * the full viewport while content remains visually centered.
 *
 * Props:
 * - children: node content
 * - sx: optional sx overrides applied to the outer full-width Box
 */
export default function SectionWrapper({ children, sx = {} }) {
  return (
    <Box
      component="section"
      sx={{ width: '100%', py: { xs: 3, md: 6 }, ...sx }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 3 },
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
