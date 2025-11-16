import React from 'react'
import { Box, Typography, Container } from '@mui/material'

/**
 * Footer - Simple footer with company info and copyright.
 */
export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Linkific — Static demo project using React & Material UI
        </Typography>
      </Container>
    </Box>
  )
}
